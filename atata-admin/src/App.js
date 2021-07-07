import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./screens/Home/Home";
import Items from "./screens/Items/Items";
import CurrencyUpdate from "./screens/UpdateCurrency/UpdateCurrency"
import SoldItems from "./screens/SoldItems/SoldItems"
import HomePageEditor from "./screens/HomePageEditor/HomePageEditor"
import CreateAdmin from "./screens/CreateAdmin/CreateAdmin"
import Setting from "./screens/Setting/setting"
import Login from './screens/Login/Login'
import CustomerPreviewPage from "./screens/CustomerDetails/CustomerDetails"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Redux/store'
import { useAuth } from "./Authentication/Auth0";
import "antd/dist/antd.css";


export default function App() {
  let auth = useAuth()
  return (
    <Provider store={store}>
      <Router>
        <Switch>
        <Route path="/login">
          <Login />
        </Route>
        </Switch>
      

        <Route exact path="/">
          
          {auth.user === null ? <Redirect to="/login" />
          
          : 
          
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
        }
        </Route>

        
      </Router>
    </Provider>
  );
}