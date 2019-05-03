import React, { Component } from 'react';
import FlatList from './flat_list';

class Marker extends Component {
  // renderMarkers = () => {
  //   const flats = Object.values(this.props.flats);
  //   // const arr3 = Object.values(myObject);
  //   // console.log(flats)
  //   return flats.map((flat)=> {flat.price})

  // }

  render () {
    return (
      <div className = "marker">
        {this.props.text}
      </div>
  );
  }
}

export default Marker;
