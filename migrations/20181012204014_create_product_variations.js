const table = function(table) {
  table.increments();
  table.integer('product_id').notNullable();
  table.string('sku').notNullable();
  table.string('img').notNullable();
  table.string('inventory').notNullable();
}

exports.up = function(knex, Promise) {
  return knex.schema.createTable('product_variations', table)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('product_variations', table)
  
};
