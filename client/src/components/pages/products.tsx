import React, { Component } from "react";
import { BidModel } from "../model/Bid-model";
interface BidState{
bids: BidModel[],
bid : BidModel
}
export class Bids extends Component <any, BidState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      bids: [],
      bid : new BidModel()
    }
  }
  public componentDidMount(): void {
    fetch("http://localhost:3001/api/bids")
      .then((response) => response.json())
      .then((bids) => this.setState({ bids }))
      .catch((err) => alert(err.message));
      // this.setState({ gamesLoad : false });
      // this.viewComments();
  }
  render() {
    return <> 
    <h2>Here are our {this.state.bids.length} bids</h2>
    
     </>;
  }
}