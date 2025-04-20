import { z } from 'zod';

export const formSchema = z.object({
  origin: z.string().min(1).max(100),
  destination: z.string().min(1).max(100),
  trip: z.enum(['one-way', 'round-trip']),
  startDate: z.string().regex(/^\d{2}-\d{2}-\d{4}$/),
  endDate: z.string().optional(),
});
