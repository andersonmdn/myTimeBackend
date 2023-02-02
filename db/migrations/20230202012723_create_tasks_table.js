/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("tasks", function (table) {
        table.increments("task_id").primary();
        table.string("description", 255);
        table.integer("number");
        table.string("item", 255);
        table.integer("estimated_time");
        table.integer("done");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("tasks")
};
