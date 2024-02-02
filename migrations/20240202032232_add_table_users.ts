import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("username").notNullable();
    table.string("role").notNullable();
    table.string("avatar").nullable();
    table.string("informations").nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("users");
}
