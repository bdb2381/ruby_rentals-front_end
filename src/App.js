import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {connect} from 'react-redux'

import Navbar from './components/navBar'
import HomeContainer from './containers/HomeContainer'
import LoginContainer from './containers/LoginContainer'
import CartContainer from './containers/CartContainer'
import SignupContainer from './containers/SignupContainer'
import ItemsContainer from './containers/ItemsContainer.js'
import {getProfileFetch} from './redux/fetchActions'

class App extends React.Component {
  
  componentDidMount(){
    // persist user across sessions if token exists in localStore
    this.props.getProfileFetch()
  }

  render() {
    return (
      <div className="App">
          <Router>
            <Route
            render={(routerProps) => {
              return <Navbar {...routerProps}/>
            }}
            />

             {/* ItemsContainer contains routing logic for items */}
            <ItemsContainer/>   

           

          <Route
            exact 
            path='/cart'
            render={(routerProps) => {
              return <CartContainer {...routerProps}
              />
            }}
            />

          <Route
          exact
          path="/login"
          render={(routerProps) => {
            return <LoginContainer {...routerProps}
            />;
          }}
          />
        
        <Route
          exact
          path="/signup"
          render={(routerProps) => {
            return <SignupContainer {...routerProps}
            />;
          }}
          />

          <Route 
          exact
          path="/"
          component={HomeContainer}
          />

          </Router>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})


export default connect(null, mapDispatchToProps) (App);

