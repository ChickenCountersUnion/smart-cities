import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Grid, Header, Search } from 'semantic-ui-react'; 
import axios from 'axios'; 
import _ from 'lodash'; 

const addresses = [
  {
      "title": "111 Germania St, San Francisco, CA 94117",
      "lat": 37.7705,
      "lon": -122.43075
  },
  {
      "title": "211 Scott St, San Francisco, CA 94117",
      "lat": 37.77071,
      "lon": -122.43551
  },
  {
      "title": "311 Octavia St, San Francisco, CA 94102",
      "lat": 37.7731,
      "lon": -122.42401
  },
  {
      "title": "41 Page St, San Francisco, CA 94102",
      "lat": 37.77374,
      "lon": -122.42304
  },
  {
      "title": "511 Noe St, San Francisco, CA 94114",
      "lat": 37.76722,
      "lon": -122.43306
  }
];

class SearchInput extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { 
      value: '', 
      isLoading: false,  
      results: [], 
      input: {}
    }
  }
  
  resetComponent = () => {
    this.setState({ isLoading: false, result: [], value: '' })
  }
  
  handleResultSelect = (e, { result }) => {
    let user = {
      title: result.title, 
      lat: result.lat, 
      lon: result.lon
    }; 
    this.setState({
      input: user
    })

  }

  handleSearchChange = (e, { value }) => {
    axios.get(`/search?query=${value}`)
    .then(res => {
      this.setState({
        result: res
      })
    })
    this.setState({ isLoading: true, value })
  }

  render() {
    return (
      <Grid>
        <Grid.Column >
          <Search
          input={{fluid: true}}
          placeholder='Enter your address'
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchChange}
          results={this.state.results}
          >  
          </Search>
        </Grid.Column>
      </Grid>
    ); 
  }
  
}


export default SearchInput; 
