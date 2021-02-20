import React, { Component } from 'react';
import { connect } from 'react-redux';

// ボタン表示のコンポーネント
export class Button extends Component {
  style = {
    fontSize: '20px',
  };

  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  doAction(e) {
    if (e.shiftkey) {
      this.props.dispatch({ type: 'DECREMENT' });
    } else {
      this.props.dispatch({ type: 'INCREMENT' });
    }
  }

  render() {
    return (
      <button style={this.style} onClick={this.doAction}>
        Click
      </button>
    );
  }
}

Button = connect()(Button);
