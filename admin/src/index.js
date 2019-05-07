import React from "react";
import ReactDOM from "react-dom";
import { history, store } from "./redux/store";
import ConnectApp from "./hocs/provider";
import theme from "./config/theme";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

const ProvidedApp = ConnectApp(store, history, theme)(App);

ReactDOM.render(<ProvidedApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
