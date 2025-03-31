/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {firstName: 'Erik', lastName: 'Voss', is_admin: true},
    {firstName: 'John', lastName: 'Doe', is_admin: false},
    {firstName: 'Jane', lastName: 'Doe', is_admin: false}
  ]);
};
