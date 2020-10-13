import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  
} from "react-router-dom";
import Navbar from './components/navBar'
import HomeContainer from './containers/HomeContainer'


import ItemsContainer from './containers/ItemsContainer.js'


class App extends React.Component {
  
  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
          <Router>
            <Navbar/>
            <HomeContainer/> 
            <ItemsContainer/>   
          </Router>
        </div>
    );
  }
}

export default App;

