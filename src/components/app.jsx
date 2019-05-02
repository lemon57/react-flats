import React, { Component } from 'react';
import FlatList from './flat_list';
import GoogleMap from './google_map';
import Marker from './marker';
import Flat from './flat';
import { flats } from '../data/flats';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      flats: {...flats}
    }
    // console.log(this.state)
  }

  render() {
    return (
      <div>
        <FlatList flats={ this.state.flats } />
        <GoogleMap />

      </div>
    );
  }
}

export default App;
