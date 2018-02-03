const axios = require('axios');
const apiKey = '66XEq8Vxes74mNn2SLPNAlUvNpTBCFLG';
const typeahead = true;
const limit = 5;
const countrySet = 'US';
const lat = '37.773972'; // default search center lat
const lon = '-122.431297'; // default search center lon

module.exports.fuzzySearch = (req, res) => {
  var {query} = req.body;
  var requestURL = `https://api.tomtom.com/search/2/search/${query}.json?key=${apiKey}&typeahead=${typeahead}&limit=${limit}&countrySet=${countrySet}&lat=${lat}&lon=${lon}`;

  axios.get(requestURL)
    .then(result => {
      
    })
    .catch(err => {
      res.status(400).send(err);
    })
}