/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('vehicle', function(table) {
        table.increments('id').primary();
        table.string('license_plate').notNullable().unique();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.string('color').notNullable();
        table.integer('customer_id').unsigned().references('id').inTable('customer').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('vehicle');
};
