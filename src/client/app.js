import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './styles/main.scss'; 
import Header from './src/components/Header'; 
import PickupForm from './src/components/PickupForm'; 
import SearchInput from './src/components/SearchInput'; 

class App extends React.Component {
  constructor () {
    super(); 
    this.state = {
    };
  }

  render() {
    return (
      <div id="container">
        <Header />
      </div>
    );
  }
}
  
export default App; 