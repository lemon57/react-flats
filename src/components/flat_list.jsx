import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderFlats = () => {
    // convert object flats to array
    const flats = Object.values(this.props.flats);
    // const arr3 = Object.values(myObject);
    console.log(flats)
    return flats.map((flat, index)=> <Flat
                              url = {flat.imageUrl}
                              key={flat.id}
                              price={flat.price}
                              priceCurrency={flat.priceCurrency}
                              name={flat.name}
                              id={flat.id}
                              index={index}
                              flat={flat}
                              selectFlat={this.props.selectFlat}/>)
  }
  render () {
    return (
      <div className="flat-list">
        {this.renderFlats()}
      </div>
    );
  }
}

export default FlatList;
