import React, { Component } from 'react';

import { Link } from 'react-router';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        Nope ;(
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}
