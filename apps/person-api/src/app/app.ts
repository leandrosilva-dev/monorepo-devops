import { FastifyInstance } from 'fastify';
import path from 'path';
import autoload from '@fastify/autoload';

/* eslint-disable-next-line */
export interface AppOptions{}

export async function app(fastify: FastifyInstance, opts: AppOptions){
    fastify.register(autoload, {
        dir: path.join(__dirname, 'plugins'),
        options: { ...opts},
    });
    
    fastify.register(autoload, {
        dir: path.join(__dirname, 'contracts'),
        options: { ...opts},
    });
}