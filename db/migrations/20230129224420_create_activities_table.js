/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('activities', function (table) {
    table.increments("activity_id").primary();
    table.string("description", 255).notNullable();
    table.integer("activities_type_id").unsigned();
    table.integer("mytime_id").unsigned();
    table.integer("active").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('activities');
};
