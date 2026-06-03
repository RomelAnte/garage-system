/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('space', function(table) {
        table.increments('id').primary();
        table.string('code').notNullable().unique();
        table.string('location').notNullable().unique();
        table.string('size').notNullable();
        table.boolean('is_occupied').defaultTo(false);
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('space');
};
