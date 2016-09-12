import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Home extends Component {
  render() {
    return (
      <div>
        Home :)
        <br />
        <Link to="/people">people</Link>
        {' '}
        <Link to="/foo">404</Link>
      </div>
    );
  }
}
