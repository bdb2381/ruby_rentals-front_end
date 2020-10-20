import React from React
import {connect} from 'react-redux'

import CartCard from './CartCard'
import CartGridHeader from './CartGridHeader'

const CartConfirmation = () => {

return(
  
 <div className="cart-container">
    <h1>Order Confirmed </h1> 
    <h2>You can pickup your order during business hours</h2>


    <CartGridHeader/>


    {this.props.purchasedItems.map(item => {
      return(
        <>
          <CartCard item={item}/>
        </>   
      )            
    })}

  </div>

  )
}

const mapStateToProps = (state) => {
  return {
    purchasedItems: state.cart.purchasedItems
   }
}


export default connect(mapStateToProps)(CartConfirmation)