import { Database } from "@devops/person-db";

import exec from './../db';

function setup(database : Database){
    return async(id : string): Promise<Object> => {
        const logic = exec(database);
        const person = logic.find(id);

        return person;
    }
};

export default {
    setup
};