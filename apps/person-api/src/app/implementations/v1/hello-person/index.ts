import { initServer } from "@ts-rest/fastify";
import { contract } from "@devops/person-contract/v1";

const s = initServer();

export const impl = s.route(contract.helloPerson, async (input) => {
  return {
    status: 201,
    body: {
      message: `Hello everybody!`,
      content: input.headers,
    },
  };
});
