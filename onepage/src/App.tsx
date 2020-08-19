import React, { Component } from "react";
import "./App.css";
import { ProductModel } from "./models/Product-model";
const PORT = 3001
const API = `http://localhost:${PORT}/api/`

interface AuctionState {
  products: ProductModel[];
}

export class App extends Component<any, AuctionState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      products: []
    };
  }
  public componentDidMount(): void {
    console.log(API + 'products')
    fetch(API + 'products')
    .then(response => response.json())
    .then(products => this.setState({ products }))
    .catch(err => alert(err.message));
    }

  render() {
    return ( 
    <div className="container">
      <h1>
        WellCome to Auction SPA
        </h1>
    <br/>
    <div className="row">
      
    {this.state.products.map(p => 
    <div className="col" key={p.productID}>
      {p.productName}
    </div>
    )}

    </div>
    <hr/>
    <h3>Add Bid:</h3>
    <form>
      <input type="text" placeholder="Enter your name" />
      <button>Add Bid</button>
    </form>
    </div> 
        )
      }
    }
  