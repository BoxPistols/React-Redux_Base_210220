import React, { Component } from 'react';
import { connect } from 'react-redux';

function mappingState(state) {
  return state;
}

export class Message extends Component {
  style = {
    fontSize: '20px',
  };
  render() {
    return (
      <p style={this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    );
  }
}

//  Storeのコネクト
Message = connect(mappingState)(Message);
