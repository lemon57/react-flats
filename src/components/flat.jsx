import React, { Component } from 'react';

class Flat extends Component {
  // function for onClick event - select flat
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
    // console.log(this.props.flat);
  }
  render () {
    // if (!this.props.id) {
    //   return null;
    // }
    return (
            <div className="card" >
              <img src={this.props.url} alt="" className="img-card" onClick={this.handleClick}/>
              <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
              <div className="card-description">{this.props.name}</div>
            </div>

    );
  }
}

export default Flat;
