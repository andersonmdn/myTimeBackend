/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("records", function (table) {
        table.increments("record_id").primary();
        table.integer("user_id").unsigned();
        table.integer("activity_id").unsigned();
        table.integer("task_id").unsigned();
        table.timestamp("start_time").notNullable();
        table.timestamp("end_time").notNullable();
        table.string("note", 255);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("records")
};
