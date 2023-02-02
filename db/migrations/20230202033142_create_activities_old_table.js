/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('activities_old', function (table) {
        table.increments('id');
        table.string('description').notNullable();
        table.integer('activity_number').notNullable();
        table.integer('activity_item').notNullable();
        table.integer('activity_description').notNullable();
        table.integer('my_time').notNullable();
        table.integer('estimated_time').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('activities_old');
};
