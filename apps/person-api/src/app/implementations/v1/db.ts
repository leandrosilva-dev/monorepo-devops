import {
  CreatePersonRequest,
  UpdatePersonRequest,
} from "@devops/person-contract/v1";
import { Database } from "@devops/person-db";
import { person } from "@devops/person-db/schema";
import { eq } from "drizzle-orm";

export default function exec(database: Database) {
  return {
    insert: async (input: CreatePersonRequest) => {
      const id = crypto.randomUUID();

      await database.insert(person).values({
        id: id,
        tenant_id: input.tenant_id,
        name: input.name,
        document_type: input.document_type,
        document: input.document,
      });

      return id;
    },
    update: async (input: UpdatePersonRequest) => {
      await database
        .update(person)
        .set({
          name: input.name,
          document: input.document,
          document_type: input.document_type,
        })
        .where(eq(person.id, input.id));

      return input.id;
    },
    find: async (id: string) => {
      return await database.select().from(person).where(eq(person.id, id));
    },
  };
}
