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
    const time = new Date();
    const year = time.getFullYear()
    const month = time.getMonth()
    const day = time.getDate() +1
    const tomorrow = time.getDate() +2
    const hour = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    const timeNow =`${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
    const timeNowMorrow =`${year}-${month}-${tomorrow} ${hour}:${minutes}:${seconds}`

    const info = request.body
    info.bidStart = timeNow
    info.bidEnd = timeNowMorrow
console.log(info)
    try {
        const bid = await bidsLogic.addOneBidAsync(info);
        response.json(bid);
    } catch (err) {
        response.status(500).send(err.message);
    }
});
module.exports = router;