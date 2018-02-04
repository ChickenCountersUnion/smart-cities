import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    this.map = tomtom.map('map', {
      key: process.env.tomtomapikey,
      center: [37.7836966, -122.4111551],
      zoom: 12,
    });
  }

  render() {
    return (
      <div id="map" style={{height: '500px'}}></div>
    );
  }
}

export default Map;
