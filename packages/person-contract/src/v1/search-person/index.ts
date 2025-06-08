import { initContract } from "@ts-rest/core";
import { z } from 'zod';
import { createPersonRequest } from "../create-person/schemas";
import { requestError } from "../error/schemas/error";

const c = initContract();

const searchPersonByIdResponseSuccess = createPersonRequest.extend({
    id: z.string(),
});

export const contract = c.query({
    method: "GET",
    path: '/person-by-id/:id',
    summary: 'Get person by ID',
    description: '',
    responses: {
        201: searchPersonByIdResponseSuccess,
        400: requestError
    }
});

export type SearchPersonByIdResponse = z.infer<typeof searchPersonByIdResponseSuccess>;