import React, { Component } from 'react';

class Flat extends Component {
  render () {
    return (
            <div className="card">
              <img src={this.props.url} alt="" className="img-card" />
              <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
              <div className="card-description">{this.props.name}</div>
            </div>

    );
  }
}

export default Flat;
