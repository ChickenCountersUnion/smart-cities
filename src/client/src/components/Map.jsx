import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    this.map = tomtom.map('map', {
      key: process.env.tomtomapikey,
    }).setView([37.7836966,-122.4111551], 14);
  }

  render() {
    return (
      <div id="map" style={{height: '500px'}}></div>
    );
  }
}

export default Map;
