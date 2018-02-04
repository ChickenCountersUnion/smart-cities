import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    this.map = tomtom.map('map', {
      key: process.env.tomtomapikey,
    });
  }

  render() {
    return (
      <div id="map" style={{height: '500px'}}></div>
    );
  }
}

export default Map;
