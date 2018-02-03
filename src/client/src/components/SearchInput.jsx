import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Search } from 'semantic-ui-react'; 

const SearchInput = () => {
  return (
    <Search
    input={{fluid: true}}
    placeholder='Enter your address'
    >  
    </Search>

  ); 
}


export default SearchInput; 
