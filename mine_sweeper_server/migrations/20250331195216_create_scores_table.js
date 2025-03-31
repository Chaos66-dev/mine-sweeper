/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('scores', (table) => {
        table.increments('id')
        table.integer('user_id')
        table.foreign('user_id').references('users.id').onDelete('CASCADE')
        table.integer('time')
        table.string('difficulty', 20)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('scores')
};
