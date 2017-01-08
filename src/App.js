import React, { Component } from 'react';
import Router from './Router';

class RNB extends Component {
  state = {
    authToken: null,
    loggedAccount: null
  }

  render() {
    return (
      <Router />
    );
  }
}

export default RNB;
