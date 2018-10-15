const queries = require('db/queries')

module.exports = async function(ctx, next) {
  const rows = await queries.products.getVariations(ctx.params.product_id)
  ctx.body = rows
}
