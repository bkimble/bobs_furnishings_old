const queries = require('db/queries')

module.exports = async function(ctx, next) {
    const rows = await queries.products.getAllProducts() 
    ctx.body = rows
}
