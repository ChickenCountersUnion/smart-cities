const axios = require('axios');
const apiKey = process.env.tomtomapikey;


module.exports = (req, res) => {
  var {query} = req.query;
  var locations = '';

  var requestURL = `
  https://api.tomtom.com/routing/1/calculateRoute/${location}[/<contentType>]?
    key=<apiKey>
    [&callback=<callback>]
    [&maxAlternatives=<alternativeRoutes>]
    [&alternativeType=<alternativeType>]
    [&minDeviationDistance=<integer>]
    [&minDeviationTime=<integer>]
    [&instructionsType=<instructionsType>]
    [&language=<language>]
    [&computeBestOrder=<boolean>]
    [&routeRepresentation=<routeRepresentation>]
    [&computeTravelTimeFor=<trafficTypes>]
    [&vehicleHeading=<integer>]
    [&sectionType=<sectionType>]
    [&report=effectiveSettings]
    [&departAt=<time>]
    [&arriveAt=<time>]
    [&routeType=<routeType>]
    [&traffic=<boolean>]
    [&avoid=<avoidType>]
    [&travelMode=<travelMode>]
  `;

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