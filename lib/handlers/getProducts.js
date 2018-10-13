module.exports = function(knex) {
  return async function(ctx, next) {
    const rows = await knex('products')
    ctx.body = rows
  }
}
