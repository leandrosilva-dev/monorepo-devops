import * as t from "drizzle-orm/pg-core";
import { personSchema } from "./common";
import { timestamps } from './columns.helpers';
import { person } from "./person";

export const person_address = personSchema.table('person_address', {
    id: t.varchar("id", { length : 36}).primaryKey(),
    zip_code: t.varchar("zip_code", { length : 8}),
    street: t.varchar("street", { length : 60}).notNull(),
    person_id: t.varchar("person_id").references(() => person.id, { onDelete: 'cascade' }).notNull(),
    ...timestamps,
    });