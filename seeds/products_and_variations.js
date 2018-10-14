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
  {id: 1, product_id: 1, sku: "111", img: "chaise_brown.jpg", inventory: 34},
  {id: 2, product_id: 2, sku: "222", img: "dining_table.jpg", inventory: 34},
  {id: 3, product_id: 3, sku: "333B", img: "nightstand_blue.jpg", inventory: 34},
  {id: 4, product_id: 3, sku: "333R", img: "nightstand_red.jpg", inventory: 34},
  {id: 5, product_id: 3, sku: "333T", img: "nightstand_teal.jpg", inventory: 34},
  {id: 6, product_id: 4, sku: "444", img: "ottoman_grey.jpg", inventory: 34},
  {id: 7, product_id: 5, sku: "555", img: "queen_bed.jpg", inventory: 34},
  {id: 8, product_id: 6, sku: "666B", img: "sofa_brown.jpg", inventory: 34},
  {id: 9, product_id: 6, sku: "666G", img: "sofa_green.jpg", inventory: 34},
  {id: 10, product_id: 6, sku: "666P", img: "sofa_purple.jpg", inventory: 34},
  {id: 11, product_id: 6, sku: "666R", img: "sofa_red.jpg", inventory: 34},
  {id: 12, product_id: 7, sku: "777_A", img: "washer_1.jpg", inventory: 34},
  {id: 13, product_id: 7, sku: "777_B", img: "washer_2.jpg", inventory: 34},
  {id: 14, product_id: 7, sku: "777_C", img: "washer_3.jpg", inventory: 34}
]

const product_attributes = [
  {product_variation_id: 1, name: "color", value: "brown"},
  {product_variation_id: 1, name: "material", value: "suede"},
  {product_variation_id: 2, name: "color", value: "brown"},
  {product_variation_id: 3, name: "color", value: "blue"},
  {product_variation_id: 4, name: "color", value: "red"},
  {product_variation_id: 5, name: "color", value: "teal"},
  {product_variation_id: 6, name: "color", value: "grey"},
  {product_variation_id: 7, name: "color", value: "white"},
  {product_variation_id: 8, name: "color", value: "brown"},
  {product_variation_id: 9, name: "color", value: "green"},
  {product_variation_id: 10, name: "color", value: "purple"},
  {product_variation_id: 11, name: "color", value: "red"},
  {product_variation_id: 12, name: "high efficiency", value: "No"},
  {product_variation_id: 13, name: "high efficiency", value: "No"},
  {product_variation_id: 14, name: "high efficiency", value: "Yes"}
]

exports.seed = function(knex, Promise) {
  return knex('products').del()
    .then(() => { return knex('product_variations').del() })
    .then(() => { return  knex('product_attributes').del() })
    .then(() => { return knex('products').insert(products) })
    .then(() => { return knex('product_variations').insert(product_variations) })
    .then(() => { return knex('product_attributes').insert(product_attributes) })
};
