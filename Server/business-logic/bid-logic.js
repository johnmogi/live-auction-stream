const dal = require("../data-access-layer/dal"); 

async function getAllBidsAsync() {
    const sql = `SELECT bidID, productID, bidOffer,  DATE_FORMAT(bidStart, "%Y/%m/%d %H:%i") as bidStart, DATE_FORMAT(bidEnd, "%Y/%m/%d %H:%i") as bidEnd FROM bids`;
    const bids = await dal.executeAsync(sql); 
    return bids;
}
async function getOneBidAsync(id) {
    const sql = `SELECT bidID, productID, bidOffer,  DATE_FORMAT(bidStart, "%Y/%m/%d %H:%i") as bidStart, DATE_FORMAT(bidEnd, "%Y/%m/%d %H:%i") as bidEnd FROM bids WHERE bidID = ${id}`;
    const bid = await dal.executeAsync(sql); 
    return bid;
}

async function addOneBidAsync(info) {
    const sql = `INSERT INTO bids (productID, bidOffer, bidStart, bidEnd) VALUES (${info.productID}, '${info.bidOffer}', '${info.bidStart}', '${info.bidEnd}'); `;
    const bid = await dal.executeAsync(sql); 
    return bid;
}

module.exports = { getAllBidsAsync, getOneBidAsync, addOneBidAsync }