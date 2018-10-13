module.exports  = async function foo(ctx, next) {
  const rows = await knex('products')
  ctx.body = rows
}
