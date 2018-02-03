const axios = require('axios');
const apiKey = process.env.tomtomapikey;
const typeahead = true;
const limit = 5;
const countrySet = 'US';
const lat = '37.773972'; // default search center lat
const lon = '-122.431297'; // default search center lon

module.exports = (req, res) => {
  var {query} = req.query;
  var requestURL = `https://api.tomtom.com/search/2/search/${query}.json?key=${apiKey}&typeahead=${typeahead}&limit=${limit}&countrySet=${countrySet}&lat=${lat}&lon=${lon}`;

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