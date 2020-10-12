import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import ItemsContainer from './containers/ItemsContainer.js'


class App extends React.Component {
  
  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
          <Router>
            <Link to="/">Home</Link> 
            <Link to="/gear">Gear</Link> 
            <ItemsContainer/>   
          </Router>
        </div>
    );
  }
}

export default App;

