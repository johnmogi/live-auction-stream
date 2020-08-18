const express = require("express");
const bidsLogic = require("../business-logic/bid-logic");
const router = express.Router();

// GET http://localhost:3000/api/bids 
router.get("/", async (request, response) => {
    try {
        const bids = await bidsLogic.getAllBidsAsync();
        response.json(bids);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// GET http://localhost:3000/api/bids/bid/:id 
router.get("/bid/:id", async (request, response) => {
    const id = +request.params.id
    try {
        const bid = await bidsLogic.getOneBidAsync(id);
        response.json(bid);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// POST http://localhost:3000/api/bids
router.post("/", async (request, response) => {
    const info = request.body
    try {
        const bid = await bidsLogic.addOneBidAsync(info);
        response.json(bid);
    } catch (err) {
        response.status(500).send(err.message);
    }
});
module.exports = router;