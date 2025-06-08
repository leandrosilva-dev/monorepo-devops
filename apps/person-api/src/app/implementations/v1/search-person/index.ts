import { initServer } from "@ts-rest/fastify";
import { contract } from "@devops/person-contract/v1";
import { Database } from "@devops/person-db";
import exec from "./exec";

const s = initServer();

export const impl = s.route(contract.searchPersonById, async (input) => {
  const { id } = input.request.params as { id: string };
  const database: Database = input.request.database();

  const logic = exec.setup(database);
  const result = await logic(id);

  return {
    status: 201,
    body: {
      result,
    },
  };
});
