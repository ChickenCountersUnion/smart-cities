const axios = require('axios');
const apiKey = process.env.tomtomapikey;
const computeBestOrder = true;
const routeRepresentation = 'polyline';


module.exports = (req, res) => {
  var locations = '';

  // DUMMY driver location as starting point
  // san tung
  var driverLatLon = {
    lat: 37.7637942, 
    lon: -122.4690077
  };

  // DUMMY recylce facility
  var destinationLatLon = {
    lat: 37.7086139, 
    lon: -122.4004984
  };

  // DUMMY remaining location , get from db during actual operation
  var wayPoints = [
    {lat: 37.7897259, lon: -122.3949751},
    {lat: 37.773972, lon: -122.431297},
    {lat: 37.783697, lon: -122.408966},
  ];
  
  var wayPointsString = wayPoints.map(point => {
    return `${point.lat},${point.lon}`;
  }).join(':');
  
  var driverLatLonString = createStringFromLatLon(driverLatLon);
  var destinationLatLonString = createStringFromLatLon(destinationLatLon);

  locations = `${driverLatLonString}:${wayPointsString}:${destinationLatLonString}`;

  
  //user that just submitted location get new routes
  //user that did not just submit poll from server


  var requestURL = `https://api.tomtom.com/routing/1/calculateRoute/${locations}/json?key=${apiKey}&computeBestOrder=${computeBestOrder}&routeRepresentation=${routeRepresentation}`;

  axios.get(requestURL)
    .then(result => {
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.status(400).send(err);
    });

}

const createStringFromLatLon = (locationObject) => {
  return `${locationObject.lat.toString()},${locationObject.lon.toString()}`;
};