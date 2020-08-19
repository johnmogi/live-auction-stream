import React, { Component, SyntheticEvent } from "react";
import "./App.css";
import { ProductModel } from "./models/Product-model";
import { BidModel } from "./models/Bid-model";
const PORT = 3001;
const API = `http://localhost:${PORT}/api/`;

interface AuctionState {
  products: ProductModel[];
  bid: BidModel;

}

export class App extends Component<any, AuctionState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      bid: new BidModel()
    };
  }
  public componentDidMount(): void {
    console.log(API + "products");
    fetch(API + "products")
      .then((response) => response.json())
      .then((products) => this.setState({ products }))
      .catch((err) => alert(err.message));
  }

  render() {
    return (
      <div className="container">
        <h1>WellCome to Auction SPA</h1>
        <br />
        <div className="row">
          {this.state.products.map((p) => (
            <div className="col" key={p.productID}>
              {p.productName}
            </div>
          ))}
        </div>
        <hr />
        <h3>Add Bid:</h3>
        <form>
          <label>Choose a book :</label>
          <select required onChange={this.setProductID} id="productID">
            <option placeholder="Choose a bid">Please select:</option>
            {this.state.products.map((p) => (
              <option key={p.productID} value={p.productID || ""}>
                {p.productName}
              </option>
            ))}
          </select>
          <br />
          <br />
          <input
            required
            type="number"
            placeholder="Enter your bid offer"
            onChange={this.setBidOffer}
            id="bidOffer"
            value={this.state.bid.bidOffer || ""}
          />
          <input
            required
            type="text"
            placeholder="Enter your name"
            id="bidderName"
            onChange={this.setBidderName}
            value={this.state.bid.bidderName || ""}
          />
          <button type="button" onClick={this.addBid}>
            Add a Bid
          </button>
        </form>
      </div>
    );
  }
  private validateForm = () => {
    if (!this.state.bid.productID) {
      alert("please Choose a product, it is required....");
      return false;
    }
    if (!this.state.bid.bidOffer) {
      alert("please name your offer, it is required....");
      return false
    }
    if (!this.state.bid.bidderName) {
      alert("please fill out your name, it is required....");
      return false;
    } else {
return true;
      
    }
    
  };
  private addBid = () => {
 
if(this.validateForm() !== true){
  return;
}
    console.log(this.state.bid);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state.bid),
    };
    fetch(API + "bids", options)
      .then((response) => response.json())
      .then((bid) => alert("bid has been added. ID: " + this.state.bid.bidID))
      .catch((err) => alert(err.message));
  };

  private setProductID = (args: SyntheticEvent) => {
    const productID = (args.target as HTMLInputElement).value;
    console.log(productID);
    const bid = { ...this.state.bid }; // Spread Operator
    bid.productID = +productID;
    this.setState({ bid });
  };
  private setBidOffer = (args: SyntheticEvent) => {
    const bidOffer = (args.target as HTMLInputElement).value;
    console.log(bidOffer);
    const bid = { ...this.state.bid }; // Spread Operator
    bid.bidOffer = +bidOffer;
    this.setState({ bid });
  };
  private setBidderName = (args: SyntheticEvent) => {
    const bidderName = (args.target as HTMLInputElement).value;
    console.log(bidderName);
    const bid = { ...this.state.bid }; // Spread Operator
    bid.bidderName = bidderName;
    this.setState({ bid });
  };
}
