const express = require("express");
const productsLogic = require("../business-logic/product-logic");
const router = express.Router();

// GET http://localhost:3000/api/products 
router.get("/", async (request, response) => {
    try {
        const products = await productsLogic.getAllProductsAsync();
        response.json(products);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// GET http://localhost:3000/api/products/product/:id 
router.get("/product/:id", async (request, response) => {
    const id = +request.params.id
    try {
        const product = await productsLogic.getOneProductAsync(id);
        response.json(product);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;