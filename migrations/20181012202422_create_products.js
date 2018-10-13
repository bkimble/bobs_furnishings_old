const table = function(table) {
  table.increments();
  table.string('name').notNullable();
  table.text('description').notNullable();
  table.text('price').notNullable();
}

exports.up = function(knex, Promise) {
 return knex.schema.createTable('products', table)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
