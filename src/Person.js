import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div className="Person">
            <ul>
                <li>ID: {this.props.id}</li>
                <li>Name: {this.props.name}</li>
                <li>Address: {this.props.address}</li>
            </ul>
      </div>
    )
  }
}

export default Person;
