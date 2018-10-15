const queries = require('db/queries')

module.exports = async function(ctx, next) {
  const rows = await queries.products.getProductBySku(ctx.params.sku)
  ctx.body = rows
}
