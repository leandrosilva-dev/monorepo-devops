import { contract } from '@devops/person-contract/v1';

import { initServer } from "@ts-rest/fastify";
import { FastifyInstance } from "fastify";

import { router } from './../implementations/v1/router';

const s = initServer();

const v1 = s.router(contract, router);

export default async function(fastify: FastifyInstance){
    fastify.register(s.plugin(v1));
}