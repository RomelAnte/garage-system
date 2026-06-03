/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bill', function(table) {
        table.increments('id').primary();
        table.integer('vehicle_id').unsigned().references('id').inTable('vehicle').onDelete('CASCADE');
        table.decimal('amount', 10, 2).notNullable();
        table.date('billing_date').notNullable();
        table.date('due_date').notNullable();
        table.boolean('is_paid').defaultTo(false);
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bill');
};
