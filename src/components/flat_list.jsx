import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderFlats = () => {
    const flats = Object.values(this.props.flats);
    // const arr3 = Object.values(myObject);
    console.log(flats)
    return flats.map(flat => <Flat
                              url = {flat.imageUrl}
                              key={flat.imageUrl}
                              price={flat.price}/>)
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
