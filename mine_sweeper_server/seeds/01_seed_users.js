/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'Chaos', firstName: 'Erik', lastName: 'Voss', is_admin: true},
    {username: 'johndoe', firstName: 'John', lastName: 'Doe', is_admin: false},
    {username: 'janedoe', firstName: 'Jane', lastName: 'Doe', is_admin: false}
  ]);
};
