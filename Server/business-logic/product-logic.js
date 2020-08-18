const dal = require("../data-access-layer/dal"); 

async function getAllProductsAsync() {
    const sql = "SELECT * FROM products";
    const products = await dal.executeAsync(sql); 
    return products;
}
async function getOneProductAsync(id) {
    const sql = `SELECT * FROM products WHERE productID = ${id}`;
    const product = await dal.executeAsync(sql); 
    return product;
}

module.exports = { getAllProductsAsync, getOneProductAsync }