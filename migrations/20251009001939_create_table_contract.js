/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('contract', function(table) {
        table.increments('id').primary();
        table.integer('customer_id').unsigned().references('id').inTable('customer').onDelete('CASCADE');
        table.integer('space_id').unsigned().references('id').inTable('space').onDelete('CASCADE');
        table.integer('vehicle_id').unsigned().references('id').inTable('vehicle').onDelete('CASCADE');
        table.string('observations').notNullable();
        table.boolean('is_active').defaultTo(true);
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contract');
};
