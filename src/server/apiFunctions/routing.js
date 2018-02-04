const axios = require('axios');
const apiKey = process.env.tomtomapikey;
const alternativeType = 'betterRoute';
const instructionsType = 'text';
const computeBestOrder = true;
const routeRepresentation = 'polyline';


module.exports = (req, res) => {
  var {query} = req.query;
  var locations = '52.50931,13.42936:52.50274,13.43872';

  // driver location as starting point
  var driverLatLon = {
    lat: 37.773972, 
    lon: -122.431297
  };

  var destinationLatLon = {
    lat: 37.773972, 
    lon: -122.431297
  };

  var driverLatLonString = createStringFromLatLon(driverLatLon);
  var destinationLatLonString = createStringFromLatLon(destinationLatLon);
  
  // remaining location , get from db
  
  //user that just submitted location get new routes

  //user that did not just submit poll from server


  var requestURL = `https://api.tomtom.com/routing/1/calculateRoute/${location}?
    key=${apiKey}
    &alternativeType=${alternativeType}
    &instructionsType=${instructionsType}
    &computeBestOrder=${computeBestOrder}
    &routeRepresentation=${routeRepresentation}`;

  axios.get(requestURL)
    .then(result => {
      var places = result.data.results.map((place) => {
        return {
          freeformAddress: place.address.freeformAddress,
          lat: place.position.lat,
          lon: place.position.lon
        };
      });
      res.status(200).send(places);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    })

}

const createStringFromLatLon = (locationObject) => {
  return `${locationObject.lat.toString()},${locationObject.lon.toString()}`;
};