const knex = require('knex')(require('knexfile'))

function getAllProducts() {
  return knex('products');
}

module.exports = {
  getAllProducts
};