import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { ProvideAuth } from './Authentication/Auth0'
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";
import store from './Redux/store'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
