import { initServer } from "@ts-rest/fastify";
import { contract } from '@devops/person-contract/v1';
import { createPersonRequest } from "@devops/person-contract/v1";

const s = initServer(); 

import exec from "./exec";
import { Database } from "@devops/person-db";

export const impl = s.route(contract.createPerson, async (input) => {
        const { body } = input;
        createPersonRequest.parse(body);
        const database : Database = input.request.database();
    
        const logic = exec.setup(database);
        const result = await logic(body);
        
        return {
            status: 201,
            body: {
                id: result
            }
        }
});