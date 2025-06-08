import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

import { updatePersonRequest } from './schemas';
import { requestError } from '../error/schemas/error';

const UpdatePersonResponseSuccess = z.object({
    id: z.string()
});

export const contract = c.mutation({
    method: 'PUT',
    path: '/person/:id',
    body: updatePersonRequest,
    responses: {
        201: UpdatePersonResponseSuccess,
        400: requestError
    }
});