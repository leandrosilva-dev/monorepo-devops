import { timestamps } from './columns.helpers';
import * as t from "drizzle-orm/pg-core";
import { personSchema } from "./common";

export const documentTypeSchema = personSchema.enum("document_type", ["legal", "common", "foreign"]);

export const person = personSchema.table('person', {
  id: t.varchar("id", { length: 36}).primaryKey(),
  tenant_id: t.varchar("tenant_id", { length: 36}),
  name: t.varchar("name", { length: 120}).notNull(),
  document_type: documentTypeSchema("document_type").notNull(),
  document: t.varchar("document", {length : 14}).notNull(),
  ...timestamps,
}, (table) => ({
  unq: t.unique().on(table.tenant_id, table.document_type, table.document)
}));