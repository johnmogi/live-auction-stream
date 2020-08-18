create a bid site SPA 

plan DB - mysql


db name: auctionSite

table - products:
productID (pk)
productName
category
price
SKU
salePrice
stock

table specialOffers:
offerID (pk)
productID (fk)
bidID (fk)
offerPrice


table- bids:
bidID (pk)
productID (fk)
bidOffer -dec
bidStart
BidEnd (auto)

INSERT INTO products (productID, productName, category, price, SKU, salePrice, stock) VALUES (NULL, 'lcd 32 flat TV', 'lcd', '3200', 'lgTV32', '3000', '60');

INSERT INTO bids (bidID, productID, bidOffer, bidStart, BidEnd) VALUES (NULL, '1', '2,600', '2020-08-18 16:55:18.000000', '2020-08-19 16:55:18.000000');

INSERT INTO specialoffers (offerID, productID, bidID, offerPrice, limitedStock) VALUES (NULL, '2', '2', '3,000', '6');


SELECT bidID,productID, bidOffer,  DATE_FORMAT(bidStart, "%m/%d/%Y %H:%i") as bidStart, DATE_FORMAT(bidEnd, "%m/%d/%Y %H:%i") as bidEnd FROM bids 