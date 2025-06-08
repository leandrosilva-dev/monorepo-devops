import Fastify from "fastify";
import { app } from "./app/app";

const server = Fastify({
  logger: true,
});

const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT) || 3000;

server.register(app);

server.listen({ port, host }, (err) => {
  if (err) {
    server.log.error(err);
  } else {
    console.log("Running");
  }
});