import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message } from './Message';
import { Button } from './Button';

class App extends Component {
  render() {
    return (
      <>
        <Message />
        <Button />
      </>
    );
  }
}
App = connect()(App);

export default App;
