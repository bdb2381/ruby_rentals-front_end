import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ItemsContainer from './containers/ItemsContainer.js'
import ReservationContainer from './containers/ReservationContainer.js'

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
          
            {/* <Link to="/reservation">Reservation</Link> */}  
            {/* <Route path="/reservation">     <ReservationContainer/> */}
            {/* </Route> */}
          </Router>
        </div>
    );
  }
}

export default App;

