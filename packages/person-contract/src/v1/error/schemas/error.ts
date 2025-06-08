import { z } from 'zod';

export const requestError = z.object({
    type: z.string()
});

export type RequestError = z.infer<typeof requestError>;