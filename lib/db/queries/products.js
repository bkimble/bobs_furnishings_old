const conn = require('../connection');

function getAllProducts() {
  return knex('movies').select('*');
}

module.exports = {
  getAllProducts
};