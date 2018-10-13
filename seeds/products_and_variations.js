var loremIpsum = require('lorem-ipsum')

const products = [
  {id: 1, name: "Sleek Chaise", description: loremIpsum({count: 4}), price: 230},
  {id: 2, name: "Dining Table", description: loremIpsum({count: 4}), price: 110},
  {id: 3, name: "Nightstand", description: loremIpsum({count: 4}), price: 43},
  {id: 4, name: "Ottoman", description: loremIpsum({count: 4}), price: 49},
  {id: 5, name: "Queen Bed", description: loremIpsum({count: 4}), price: 500},
  {id: 6, name: "Sofa", description: loremIpsum({count: 4}), price: 43},
  {id: 7, name: "Decent Washer", description: loremIpsum({count: 4}), price: 100},
  {id: 8, name: "Middle of the Road Washer", description: loremIpsum({count: 4}), price: 200},
  {id: 9, name: "Wow! Amazing Washer", description: loremIpsum({count: 4}), price: 300},
]

const product_variations = [
  {id: 1, product_id: 1, sku: "123", img: "couch_red.jpg", inventory: 34}
]

const product_attributes = [
  {product_variation_id: 1, name: "color", value: "red"}
]

exports.seed = function(knex, Promise) {
  return knex('products').del()
    .then(() => { return knex('product_variations').del() })
    .then(() => { return  knex('product_attributes').del() })
    .then(() => { return knex('products').insert(products) })
    .then(() => { return knex('product_variations').insert(product_variations) })
    .then(() => { return knex('product_attributes').insert(product_attributes) })
};
