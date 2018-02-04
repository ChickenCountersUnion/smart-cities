import React from 'react';

// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: 37.773972, lng: -122.431297 }}
//   >
//     {props.isMarkerShown && 
//     props.locations.map((location, index) => {
//       return (<Marker position={{ lat: location.lat, lng: location.lon }} key={index} />);
//     })}
//   </GoogleMap>
// ));


// export default MyMapComponent;

const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

var locations = [
  {lat: 37.7897259, lon: -122.3949751 },
  {lat: 37.773972, lon: -122.431297 },
  {lat: 37.733130, lon: -122.505159 },
  {lat: 37.752510, lon: -122.447568 },
  {lat: 37.808000, lon: -122.417743 },
];

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDXLOMgs19AOUHeizaMnRwjVyzxcTGWmJ8",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(37.7637942, -122.4690077),
        destination: new google.maps.LatLng(37.7086139, -122.4004984),
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: locations.map(location => {
          return ({location: new google.maps.LatLng(location.lat, location.lon)});
        })
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

export default MapWithADirectionsRenderer;