/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pay', function(table) {
        table.increments('id').primary();
        table.integer('contract_id').unsigned().references('id').inTable('contract').onDelete('CASCADE');
        table.integer('bill_id').unsigned().references('id').inTable('bill').onDelete('CASCADE');
        table.decimal('amount', 10, 2).notNullable();

        table.timestamps(true, true);
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pay');
};
