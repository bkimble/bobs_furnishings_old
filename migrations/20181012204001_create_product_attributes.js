const table = function(table) {
  table.increments();
  table.string('name').notNullable();
  table.string('value').notNullable();
  table.integer('product_variation_id').notNullable();
}

exports.up = function(knex, Promise) {
  return knex.schema.createTable('product_attributes', table)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('product_attributes');  
};
