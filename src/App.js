import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Navbar from './components/navBar'
import HomeContainer from './containers/HomeContainer'
import LoginContainer from './containers/LoginContainer'

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

          <Route
          exact
          path="/login"
          render={(routerProps) => {
            return <LoginContainer {...routerProps}
            //  handleLogin={this.handleLogin}
            />;
          }}
          />
          </Router>
          
          
          
          
        </div>
    );
  }
}

export default App;

