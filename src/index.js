import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './styles.scss';

// State
let state_value = {
  counter: 0,
  message: 'Counter',
};

// Reducer Action Type
function counter(state = state_value, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        message: 'INCREMENT',
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        message: 'DECREMENT',
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

render(reactElement, document.getElementById('root'));
