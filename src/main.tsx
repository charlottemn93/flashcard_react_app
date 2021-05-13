import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CreateAccount from "./components/CreateAccount";
import ManageFlashcards from "./components/ManageFlashcards";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <CreateAccount />
  </Provider>,
  document.getElementById("app")
);
