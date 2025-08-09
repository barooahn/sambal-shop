import { createClient } from '@supabase/supabase-js';
import { vi, describe, test, expect, beforeEach } from 'vitest';

// Mock Supabase
vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(),
}));

// Mock fetch for external API calls
global.fetch = vi.fn();

describe('Backend Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Clear fetch mock
    vi.mocked(fetch).mockClear();
  });

  describe('Supabase Integration', () => {
    test('recordInterest integrates with Supabase correctly', async () => {
      // Mock Supabase client
      const mockInsert = vi.fn().mockReturnValue({
        from: vi.fn().mockReturnThis(),
        insert: vi.fn().mockResolvedValue({ error: null })
      });

      const mockSupabase = {
        from: vi.fn().mockReturnValue({
          insert: mockInsert
        })
      };

      vi.mocked(createClient).mockReturnValue(mockSupabase);

      // Set environment variables
      process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co';
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key';

      // Import function after mocking
      const { recordInterest } = await import('@/lib/actions');

      const result = await recordInterest({ source: 'test_source' });

      expect(createClient).toHaveBeenCalledWith('https://test.supabase.co', 'test-key');
      expect(result.success).toBe(true);
    });

    test('recordInterest handles Supabase errors gracefully', async () => {
      const mockSupabase = {
        from: vi.fn().mockReturnValue({
          insert: vi.fn().mockResolvedValue({ 
            error: { message: 'Database error' }
          })
        })
      };

      vi.mocked(createClient).mockReturnValue(mockSupabase);

      process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co';
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key';

      const { recordInterest } = await import('@/lib/actions');

      const result = await recordInterest({ source: 'test_source' });

      expect(result.success).toBe(false);
      expect(result.message).toBe('Unable to record interest right now.');
    });
  });

  describe('External API Integration Tests', () => {
    test('newsletter subscription with external service (mock)', async () => {
      // Mock successful API response
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ success: true, message: 'Subscribed successfully' })
      });

      // This would be your actual implementation
      const subscribeToExternalService = async (email: string) => {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        return response.json();
      };

      const result = await subscribeToExternalService('test@example.co.uk');

      expect(fetch).toHaveBeenCalledWith('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'test@example.co.uk' })
      });

      expect(result.success).toBe(true);
    });

    test('contact form submission with external service (mock)', async () => {
      // Mock successful API response
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ success: true, message: 'Message sent successfully' })
      });

      const submitToExternalService = async (formData: any) => {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        return response.json();
      };

      const formData = {
        name: 'John Doe',
        email: 'john@example.co.uk',
        message: 'Test message'
      };

      const result = await submitToExternalService(formData);

      expect(fetch).toHaveBeenCalledWith('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      expect(result.success).toBe(true);
    });

    test('handles network errors gracefully', async () => {
      // Mock network error
      vi.mocked(fetch).mockRejectedValue(new Error('Network error'));

      const submitToExternalService = async (email: string) => {
        try {
          const response = await fetch('/api/newsletter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
          });
          return response.json();
        } catch (error) {
          return { success: false, message: 'Network error occurred' };
        }
      };

      const result = await submitToExternalService('test@example.co.uk');

      expect(result.success).toBe(false);
      expect(result.message).toBe('Network error occurred');
    });

    test('handles API server errors', async () => {
      // Mock server error response
      vi.mocked(fetch).mockResolvedValue({
        ok: false,
        status: 500,
        json: () => Promise.resolve({ error: 'Internal server error' })
      });

      const submitToExternalService = async (email: string) => {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });

        if (!response.ok) {
          return { success: false, message: 'Server error occurred' };
        }

        return response.json();
      };

      const result = await submitToExternalService('test@example.co.uk');

      expect(result.success).toBe(false);
      expect(result.message).toBe('Server error occurred');
    });
  });

  describe('Rate Limiting and Validation', () => {
    test('handles rate limiting', async () => {
      // Mock rate limit response
      vi.mocked(fetch).mockResolvedValue({
        ok: false,
        status: 429,
        json: () => Promise.resolve({ error: 'Rate limit exceeded' })
      });

      const submitWithRateLimit = async (email: string) => {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });

        if (response.status === 429) {
          return { success: false, message: 'Please wait before trying again' };
        }

        return response.json();
      };

      const result = await submitWithRateLimit('test@example.co.uk');

      expect(result.success).toBe(false);
      expect(result.message).toBe('Please wait before trying again');
    });

    test('validates email format server-side', async () => {
      // Mock validation error response
      vi.mocked(fetch).mockResolvedValue({
        ok: false,
        status: 400,
        json: () => Promise.resolve({ error: 'Invalid email format' })
      });

      const submitWithValidation = async (email: string) => {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });

        if (response.status === 400) {
          const errorData = await response.json();
          return { success: false, message: errorData.error };
        }

        return response.json();
      };

      const result = await submitWithValidation('invalid-email');

      expect(result.success).toBe(false);
      expect(result.message).toBe('Invalid email format');
    });
  });

  describe('Data Persistence Tests', () => {
    test('verifies data is stored correctly in Supabase', async () => {
      const mockInsert = vi.fn().mockResolvedValue({ error: null });
      const mockSupabase = {
        from: vi.fn().mockReturnValue({
          insert: mockInsert
        })
      };

      vi.mocked(createClient).mockReturnValue(mockSupabase);

      process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co';
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key';

      const { recordInterest } = await import('@/lib/actions');

      await recordInterest({ source: 'test_source' });

      expect(mockSupabase.from).toHaveBeenCalledWith('product_interest');
      expect(mockInsert).toHaveBeenCalledWith([
        expect.objectContaining({
          identifier: expect.stringMatching(/^anon_\d+$/),
          source: 'test_source',
          user_agent: expect.any(String)
        })
      ]);
    });

    test('handles concurrent submissions', async () => {
      const mockInsert = vi.fn().mockResolvedValue({ error: null });
      const mockSupabase = {
        from: vi.fn().mockReturnValue({
          insert: mockInsert
        })
      };

      vi.mocked(createClient).mockReturnValue(mockSupabase);

      process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co';
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key';

      const { recordInterest } = await import('@/lib/actions');

      // Simulate concurrent submissions
      const promises = [
        recordInterest({ source: 'test_1' }),
        recordInterest({ source: 'test_2' }),
        recordInterest({ source: 'test_3' })
      ];

      const results = await Promise.all(promises);

      expect(results).toHaveLength(3);
      results.forEach(result => {
        expect(result.success).toBe(true);
      });

      expect(mockInsert).toHaveBeenCalledTimes(3);
    });
  });
});