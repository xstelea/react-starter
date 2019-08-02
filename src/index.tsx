import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { createMuiTheme } from "@material-ui/core";
import * as React from "react";
import { Provider } from "react-redux";
import "rxjs";
import { App } from "./containers/App";
import { store } from "./store";

const theme = createMuiTheme();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
