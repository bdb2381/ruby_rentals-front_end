import React, { Component } from 'react';
import {connect} from 'react-redux'

import Home from '../components/Home'
import ItemsContainer from '../containers/ItemsContainer.js'
class HomeContainer extends React.Component {

render(){
return(
  <div>
    <Home/>
  </div>

)}

}

export default HomeContainer