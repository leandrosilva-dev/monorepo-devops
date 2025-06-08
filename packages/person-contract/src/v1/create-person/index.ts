import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

import { createPersonRequest } from './schemas/create-person-request';
import { requestError } from '../error/schemas/error';

const CreatePersonResponseSuccess = z.object({
    id: z.string()
});

export const contract = c.mutation({
    method: 'POST',
    path: '/person',
    summary: 'Create person',
    description: '',
    metadata: {

    },
    body: createPersonRequest,
    responses: {
        201: CreatePersonResponseSuccess,
        400: requestError
    }
});