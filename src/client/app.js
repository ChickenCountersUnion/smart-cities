import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './styles/main.scss'; 
import Header from './src/components/Header'; 
import PickupForm from './src/components/PickupForm'; 
import SearchInput from './src/components/SearchInput'; 
import MyMapComponent from './src/components/MyMapComponent'; 

class App extends React.Component {
  constructor () {
    super(); 
    this.state = {
      locations: [
        {lat: 37.7897259, lon: -122.3949751 },
        {lat: 37.773972, lon: -122.431297 },
        {lat: 37.783697, lon: -122.408966 },
        {lat: 37.752510, lon: -122.447568 },
      ]
    };
  }

  render() {
    return (
      <div id="container">
        <Header />
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          locations={this.state.locations}
        />
      </div>
    );
  }
}
  
export default App; 