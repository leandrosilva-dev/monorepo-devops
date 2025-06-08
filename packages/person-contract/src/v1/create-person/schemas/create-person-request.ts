import { z } from 'zod';

export const createPersonRequest = z.object({
    tenant_id: z.string().max(36),
    name: z.string().max(120),
    document_type: z.enum(['legal', 'common', 'foreign']),
    document: z.string().max(14)
}).strict();

export type CreatePersonRequest = z.infer<typeof createPersonRequest>;