import { initServer } from "@ts-rest/fastify";
import { contract, updatePersonRequest } from "@devops/person-contract/v1";

const s = initServer();

import { Database } from "@devops/person-db";
import exec from "./exec";

export const impl = s.route(contract.updatePerson, async (input) => {
  const { body } = input;
  updatePersonRequest.parse(body);
  const database: Database = input.request.database();

  const logic = exec.setup(database);
  const result = await logic(body);

  return {
    status: 201,
    body: {
      id: result,
    },
  };
});
