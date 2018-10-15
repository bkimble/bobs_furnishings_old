const knex = require('knex')(require('knexfile'))

let baseQuery = knex('product_variations')
    .leftJoin('products', 'products.id', 'product_variations.product_id')
    .leftJoin('product_attributes', 'product_attributes.product_variation_id', 'product_variations.id')
    .select('product_variations.*', 'products.*', 'product_variations.id as product_variation_id', knex.raw('JSON_OBJECTAGG(product_attributes.name, product_attributes.value) as attributes_json'))
    .groupBy('product_variations.id')

function getAllProducts() {
  return baseQuery.clone()
}

function getProductBySku(sku) {
  return baseQuery.clone().where({"product_variations.sku" : sku}).first()
}

function getVariations(product_id) {
  return baseQuery.clone().where({"products.id" : product_id})
}

module.exports = {
  getAllProducts,
  getProductBySku,
  getVariations
};