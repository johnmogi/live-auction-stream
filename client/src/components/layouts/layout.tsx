import React, { Component } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { BrowserRouter, Switch , Route } from "react-router-dom";
import { Home } from "../pages/home";
import {  Bids } from "../pages/bids";
import { PageNotFound } from "../pages/page-not-found";
import './layout.css';

export class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="jumbotron">
            <Switch>
              {/* <Redirect to="/home" path="/" exact /> */}
              <Route path="/" component={Home} exact />
              <Route path="/bids" component={Bids} exact />
              {/* <Route path="/games/:cat" component={Category} /> */}
              <Route path="" component={PageNotFound} exact />
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
