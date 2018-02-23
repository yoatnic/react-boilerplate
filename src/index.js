import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";
import { store } from "./Store";
import "./styles/index.css";

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementsByClassName("main")[0]
);
