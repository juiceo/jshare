import { z } from 'zod';

export const zID = z.string().uuid('Must be a valid UUID');
