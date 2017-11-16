import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import App from "./Components/App";
import "./index.css";
import { app } from "./Reducer";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(combineReducers({ app }));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
