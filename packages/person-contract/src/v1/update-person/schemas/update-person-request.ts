import { z } from 'zod';

export const updatePersonRequest = z.object({
    id: z.string().max(36),
    tenant_id: z.string().max(36),
    name: z.string().max(120),
    document_type: z.enum(['legal', 'common', 'foreign']),
    document: z.string().max(14)
}).strict();

export type UpdatePersonRequest = z.infer<typeof updatePersonRequest>;