import { UpdatePersonRequest } from "@devops/person-contract/v1";
import { Database } from "@devops/person-db";

import exec from "./../db";

function setup(database: Database) {
  return async (input: UpdatePersonRequest): Promise<string> => {
    const logic = exec(database);
    const id = logic.update(input);

    return id;
  };
}

export default {
  setup,
};
