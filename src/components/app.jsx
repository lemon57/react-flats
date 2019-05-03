import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list';
import GoogleMap from './google_map';
import Marker from './marker';
import Flat from './flat';
import { flats } from '../data/flats';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      flats: {...flats},
      selectedFlat: null
    }
    // console.log(this.state)
    // const apparts = Object.values(this.state.flats);
    // console.log(apparts);
  }


  selectFlat = (flat) => {
    console.log(flat);
    this.setState({
      selectedFlat: flat
    });
  }

  render() {
    const apparts = Object.values(this.state.flats);
    // console.log(apparts);

    let center = {
      lat: 48.8566,
      lng: 2.3522
    }

    if (this.state.selectedFlat) {
    center = {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    }
  }

    return (
      <div>
        <FlatList flats={ this.state.flats } selectFlat = {this.selectFlat} />
          <div className="map-container" style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact center={center} defaultZoom={12} bootstrapURLKeys={{key:'AIzaSyC4UNTe86-kfXVRScW_Wb3r9zya85El_A8'}}>
              {apparts.map(appart => {
                return <Marker key={appart.name} lat={appart.lat} lng={appart.lng} text={appart.price}/>
              })}
            </GoogleMapReact>
          </div>
      </div>
    );
  }
}

export default App;
