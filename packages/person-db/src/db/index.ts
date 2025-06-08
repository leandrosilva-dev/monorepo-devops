import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../schema/index';

export async function createConnection(connectionString: string){
    const pool = new Pool({
        connectionString: connectionString,
        max: 10,
        min: 1,
        connectionTimeoutMillis: 3000
    });

    return drizzle({ client : pool, schema});
}

export type Database = 
| Awaited<ReturnType<typeof createConnection>>
| Parameters<
    Parameters<Awaited<ReturnType<typeof createConnection>>['transaction']>[0]
    >[0];