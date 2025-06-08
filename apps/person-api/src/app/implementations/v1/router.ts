import { impl as createPerson } from "./create-person";
import { impl as searchPersonById } from "./search-person";
import { impl as updatePerson } from "./update-person";
import { impl as helloPerson } from "./hello-person";
import { initServer } from "@ts-rest/fastify";
import { contract } from '@devops/person-contract/v1';

const s = initServer();

export const router = s.router(contract, {
    createPerson: createPerson,
    searchPersonById: searchPersonById,
    updatePerson: updatePerson,
    helloPerson: helloPerson
});