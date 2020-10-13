import React, { Component } from 'react';

import Home from '../components/Home'

import CartCheckout from '../components/CartCheckout'



class HomeContainer extends React.Component {

render(){
return(
  <div>
  
    <Home/>
    <CartCheckout/>
    

  </div>

)}

}

export default HomeContainer