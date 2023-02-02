/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("activities_type", function (table) {
        table.increments("activities_type_id").primary();
        table.string("description", 255).notNullable();
        table.integer("has_number").notNullable();
        table.integer("has_item").notNullable();
        table.integer("has_description").notNullable();
        table.integer("has_estimated_time").notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("activities_type")
};
