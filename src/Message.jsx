import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Message extends Component {
  style = {
    fontSize: '20px',
  };
  render() {
    return (
      <p style={this.style}>
        {/* this.props.STORE_VALUE */}
        {this.props.message}: {this.props.counter}
      </p>
    );
  }
}

// StateのMapping = this component return
function mappingState(state) {
  return state;
}
//  Storeのコネクト
Message = connect(mappingState)(Message);
