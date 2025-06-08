import { CreatePersonRequest } from "@devops/person-contract/v1";
import { Database } from "@devops/person-db";

import exec from './../db';

function setup(database : Database){
    return async(input : CreatePersonRequest): Promise<string> => {
        const logic = exec(database);
        const id = logic.insert(input);

        return id;
    }
};

export default {
    setup
};