/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('activities'), function (table) {
	  table.increments('id')
	  table.string('description')
	  table.integer('activity_number')
	  table.integer('activity_item')
	  table.integer('activity_description')
	  table.integer('my_time')
	  table.integer('estimated_time')
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('activities')
};
