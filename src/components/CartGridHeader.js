import React from 'react'
import {connect} from 'react-redux'

const CartGridHeader = (props) => {

  return (
    <>
      <div className="cartHeader">Item Description</div>
      <div className="cartHeader">Pickup Date</div>
      <div className="cartHeader">Return Date</div>
      <div className="cartHeader">Each/Day</div>
      <div className="cartHeader">Quantity</div>
      <div className="cartHeader">Total</div>
    
      {/* display remove item on if order is final or not */}
      {props.cartStatus === "ITEM_ADDED" || "ITEM_REMOVED" 
        ? (<div className="cartHeader">Remove</div>)
        : (<div></div>) 
     }
 




    </>
  )

}
const mapStateToProps = (state) => {
  return {
    cartStatus: state.cart.cartStatus    
   }
}

export default connect(mapStateToProps)( CartGridHeader)