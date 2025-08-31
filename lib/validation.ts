import { z } from 'zod';
// import DOMPurify from 'isomorphic-dompurify';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters')
    .transform((val) => val.trim()),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .transform((val) => val.trim().toLowerCase()),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .transform((val) => val.trim()),
});

// Newsletter subscription validation schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .transform((val) => val.trim().toLowerCase()),
  preferences: z
    .object({
      recipes: z.boolean().optional().default(true),
      newProducts: z.boolean().optional().default(true),
      specialOffers: z.boolean().optional().default(true),
    })
    .optional()
    .default({
      recipes: true,
      newProducts: true,
      specialOffers: true,
    }),
});

// Interest form validation schema
export const interestFormSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .transform((val) => val.trim().toLowerCase()),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters')
    .transform((val) => val.trim()),
  interests: z
    .array(z.string())
    .optional()
    .default([])
    .transform((val) => val.map((item) => item.trim())),
});

// Search query validation schema
export const searchQuerySchema = z.object({
  q: z
    .string()
    .min(1, 'Search query is required')
    .max(100, 'Search query must be less than 100 characters')
    .transform((val) => val.trim()),
  category: z
    .enum(['all', 'products', 'recipes', 'blog'])
    .optional()
    .default('all'),
  limit: z
    .number()
    .int()
    .min(1)
    .max(50)
    .optional()
    .default(10),
});

// Rate limiting configuration
export const rateLimitConfig = {
  contact: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 submissions per window
    message: {
      error: 'Too many contact form submissions. Please try again later.',
    },
  },
  newsletter: {
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // 3 submissions per hour
    message: {
      error: 'Too many newsletter subscriptions. Please try again later.',
    },
  },
  search: {
    windowMs: 60 * 1000, // 1 minute
    max: 30, // 30 searches per minute
    message: {
      error: 'Too many search requests. Please slow down.',
    },
  },
  general: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per window
    message: {
      error: 'Too many requests. Please try again later.',
    },
  },
};

// CSRF token validation
export const validateCSRFToken = (token: string, expectedToken: string): boolean => {
  return token === expectedToken && token.length === 32;
};

// Input sanitization utility
export const sanitizeInput = (input: string): string => {
  return input.trim(); // Simplified for now
};

// Email validation utility
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
};

// File upload validation (for future use)
export const fileUploadSchema = z.object({
  name: z.string().min(1).max(255),
  type: z.enum(['image/jpeg', 'image/png', 'image/webp']),
  size: z.number().max(5 * 1024 * 1024), // 5MB max
});

// API response schemas
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type InterestFormData = z.infer<typeof interestFormSchema>;
export type SearchQueryData = z.infer<typeof searchQuerySchema>;
export type FileUploadData = z.infer<typeof fileUploadSchema>;
export type ApiResponse = z.infer<typeof apiResponseSchema>;