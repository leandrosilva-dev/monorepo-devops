import { initContract } from "@ts-rest/core";
import { z } from 'zod';
import { createPersonRequest } from "../create-person/schemas";
import { requestError } from "../error/schemas/error";

const c = initContract();

const helloPersonByIdResponseSuccess = createPersonRequest.extend({
    message: z.string(),
    content: z.any(),
});

export const contract = c.query({
    method: "GET",
    path: '/hello-person',
    summary: 'Just a hello person endpoint',
    description: '',
    responses: {
        201: helloPersonByIdResponseSuccess,
        400: requestError
    }
});

export type HelloPersonByIdResponse = z.infer<typeof helloPersonByIdResponseSuccess>;