import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./screens/Home/Home";
import Items from "./screens/Items/Items";
import CurrencyUpdate from "./screens/UpdateCurrency/UpdateCurrency"
import SoldItems from "./screens/SoldItems/SoldItems"
import HomePageEditor from "./screens/HomePageEditor/HomePageEditor"
import CreateAdmin from "./screens/CreateAdmin/CreateAdmin"
import Setting from "./screens/Setting/setting"
import CustomerPreviewPage from "./screens/CustomerDetails/CustomerDetails"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/items">
              <Items />
            </Route>
            <Route path="/customerPage">
              <CustomerPreviewPage />
            </Route>
            <Route path="/currencyValue">
              <CurrencyUpdate />
            </Route>
            <Route path="/soldItems">
              <SoldItems />
            </Route>
            <Route path="/homepageEditor">
              <HomePageEditor />
            </Route>
            <Route path="/createAdmin">
              <CreateAdmin />
            </Route>
            <Route path="/setting">
              <Setting />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
