import { NextRequest, NextResponse } from 'next/server';

// Rate limiter configuration for different API endpoints
const RATE_LIMITS = {
  // General API endpoints
  default: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100, // requests per window
  },
  // Contact form and sensitive endpoints
  contact: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 5, // requests per window
  },
  // Newsletter signup
  newsletter: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 3, // requests per window
  },
  // Authentication related
  auth: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5, // requests per window
  },
  // Interest tracking (waitlist)
  interest: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10, // requests per window
  },
  // Pre-order submissions
  preorder: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 5, // requests per window
  },
  // Feedback submission
  feedback: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 3, // requests per window
  }
};

// In-memory store for rate limiting (use Redis in production)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  requestCounts.forEach((data, key) => {
    if (now > data.resetTime) {
      requestCounts.delete(key);
    }
  });
}, 5 * 60 * 1000);

/**
 * Rate limiter middleware for API routes
 */
export function rateLimiter(
  endpoint: keyof typeof RATE_LIMITS = 'default'
) {
  return async (request: NextRequest): Promise<NextResponse | null> => {
    const config = RATE_LIMITS[endpoint];
    const now = Date.now();
    
    // Get client IP address
    const ip = getClientIP(request);
    if (!ip) {
      console.warn('Unable to determine client IP for rate limiting');
      return null; // Allow request if we can't determine IP
    }
    
    // Create unique key for this IP and endpoint
    const key = `${ip}:${endpoint}`;
    
    // Get current request count for this key
    const currentData = requestCounts.get(key);
    
    if (!currentData || now > currentData.resetTime) {
      // First request in this window or window expired
      requestCounts.set(key, {
        count: 1,
        resetTime: now + config.windowMs
      });
      return null; // Allow request
    }
    
    if (currentData.count >= config.maxRequests) {
      // Rate limit exceeded
      const resetTimeSeconds = Math.ceil((currentData.resetTime - now) / 1000);
      
      return NextResponse.json(
        {
          success: false,
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter: resetTimeSeconds
        },
        {
          status: 429,
          headers: {
            'Retry-After': resetTimeSeconds.toString(),
            'X-RateLimit-Limit': config.maxRequests.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil(currentData.resetTime / 1000).toString()
          }
        }
      );
    }
    
    // Increment request count
    currentData.count++;
    requestCounts.set(key, currentData);
    
    return null; // Allow request
  };
}

/**
 * Get client IP address from request headers
 */
function getClientIP(request: NextRequest): string | null {
  // Check various headers that might contain the real IP
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(',')[0].trim();
  }
  
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP.trim();
  }
  
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  if (cfConnectingIP) {
    return cfConnectingIP.trim();
  }
  
  // Fallback: in newer versions of Next.js, IP might not be directly accessible
  // Return null to indicate IP couldn't be determined
  return null;
}

/**
 * Utility function to check rate limit status without incrementing
 */
export function checkRateLimit(
  ip: string,
  endpoint: keyof typeof RATE_LIMITS = 'default'
): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const config = RATE_LIMITS[endpoint];
  const now = Date.now();
  const key = `${ip}:${endpoint}`;
  
  const currentData = requestCounts.get(key);
  
  if (!currentData || now > currentData.resetTime) {
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime: now + config.windowMs
    };
  }
  
  return {
    allowed: currentData.count < config.maxRequests,
    remaining: Math.max(0, config.maxRequests - currentData.count),
    resetTime: currentData.resetTime
  };
}

/**
 * Middleware wrapper for API routes
 */
export function withRateLimit<T extends any[]>(
  handler: (request: NextRequest, ...args: T) => Promise<NextResponse>,
  endpoint: keyof typeof RATE_LIMITS = 'default'
) {
  return async (request: NextRequest, ...args: T): Promise<NextResponse> => {
    const rateLimitResponse = await rateLimiter(endpoint)(request);
    
    if (rateLimitResponse) {
      // Rate limit exceeded
      return rateLimitResponse;
    }
    
    // Rate limit passed, continue with original handler
    return handler(request, ...args);
  };
}

/**
 * Rate limiting configuration for production with Redis
 * Uncomment and configure when ready to deploy
 */

/*
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export async function redisRateLimiter(
  endpoint: keyof typeof RATE_LIMITS = 'default'
) {
  return async (request: NextRequest): Promise<NextResponse | null> => {
    const config = RATE_LIMITS[endpoint];
    const ip = getClientIP(request);
    
    if (!ip) return null;
    
    const key = `rate_limit:${ip}:${endpoint}`;
    const now = Date.now();
    
    // Use Redis pipeline for atomic operations
    const pipeline = redis.pipeline();
    pipeline.incr(key);
    pipeline.ttl(key);
    pipeline.pexpire(key, config.windowMs);
    
    const results = await pipeline.exec();
    const count = results?.[0]?.[1] as number;
    const ttl = results?.[1]?.[1] as number;
    
    if (count > config.maxRequests) {
      const resetTime = Math.ceil((ttl > 0 ? ttl : config.windowMs / 1000));
      
      return NextResponse.json(
        {
          success: false,
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter: resetTime
        },
        {
          status: 429,
          headers: {
            'Retry-After': resetTime.toString(),
            'X-RateLimit-Limit': config.maxRequests.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil((now + ttl * 1000) / 1000).toString()
          }
        }
      );
    }
    
    return null;
  };
}
*/