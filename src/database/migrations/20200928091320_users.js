
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.integer('id').primary();
      table.string('nome');
      table.string('email');
      table.integer('idade');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
