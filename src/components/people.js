import React, { Component } from 'react';

import { resolve } from "react-resolver";
import { Link } from 'react-router';
import axios from 'axios';

@resolve('people', function (props) {
  return axios.get('http://jsonplaceholder.typicode.com/users')
      .then(res => res.data);
})
class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  render() {
    return (
      <div>
        <ul> 
          {this.props.people.map(p =>
              <li key={p.id}>{p.name}</li>)}
        </ul>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default People;
