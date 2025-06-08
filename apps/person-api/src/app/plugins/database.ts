import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import { createConnection, type Database } from "@devops/person-db";

declare module "fastify" {
  interface FastifyRequest {
    database(): Database;
  }
}

export default fp(async function (fastify: FastifyInstance) {
  const database = await createConnection(
    process.env.CONNECTION_STRING ??
      "postgresql://admin:example@172.18.0.2:5432/postgres",
  );

  fastify.decorateRequest("database", function () {
    return database;
  });
});
