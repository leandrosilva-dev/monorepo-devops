import { initContract } from '@ts-rest/core';

import { contract as createPerson } from "./create-person";
import { contract as updatePerson } from "./update-person";
import { contract as searchPersonById } from "./search-person";
import { contract as helloPerson } from "./hello-person";

const c = initContract();

export * from './create-person/schemas';
export * from './update-person/schemas';

export const contract = c.router({
    createPerson : createPerson,
    updatePerson : updatePerson,
    searchPersonById: searchPersonById, 
    helloPerson: helloPerson
},{
    pathPrefix: '/v1'
});