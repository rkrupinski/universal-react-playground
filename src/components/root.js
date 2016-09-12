import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Routes from '../routes';

export default class Root extends Component {
  render() {
    return (
      <Router
          history={browserHistory}
          routes={Routes}
          onUpdate={() => window.scrollTo(0, 0)}
          />
    );
  }
}
