import React, { Component } from 'react';

class Flat extends Component {
  render () {
    return (
      // <img src="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg" alt="" className="card" />
        <img src={this.props.url} price={this.props.price} alt="" className="card" />
    );
  }
}

export default Flat;
