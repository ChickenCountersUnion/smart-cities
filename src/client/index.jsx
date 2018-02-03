import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { AppContainer } from 'react-hot-loader'; 
import App from './app'; 

const Index = (
    <AppContainer>
       <App/>
    </AppContainer>
); 


ReactDOM.render(
  Index, document.getElementById('app')
);

if (module.hot) {
  module.hot.accept(); 
}