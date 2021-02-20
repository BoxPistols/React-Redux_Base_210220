// index.js
import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {} from "./styles.css";
import App from "./App";

// State
let state_value = {
  counter: 0,
  message: "Counter"
};

// Reducer
function counter(state = state_value, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        message: "INCREMENT"
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
        message: "DECREMENT"
      };
    default:
      return state;
  }
}

// Store作成
let store = createStore(counter);

const reactElement = (
  <div className="el">
    <h1>React Redux</h1>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

render(reactElement, document.getElementById("root"));
