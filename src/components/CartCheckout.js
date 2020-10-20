import React from 'react'
import {connect} from 'react-redux'
import {receiptPostFetch, postCartSuccess, reservationPostFetch} from '../redux/fetchActions.js'
import {removeItemFromCart} from '../redux/actions'
import CartCard from './CartCard'
import CartGridHeader from './CartGridHeader'




class CartCheckout extends React.Component{
    
  // Run two nested fetch requests. 
  handleClick = ()=>{
    // 1) Post receipt which then calls 2) post reservation data with receipt id

    const {cartGrandTotal, cartItems, currentUser} = this.props
    
    this.props.receiptPostFetch(cartGrandTotal, cartItems, currentUser, reservationPostFetch)
  
// below required to create validation
    // total_rental_amount: total,
    // rental_status: selectedInventory.rental_status,
    // requested_quanitity: numberOfItemsReserved

    this.props.postCartSuccess()

  } // end handleClick 


  // remove item from cart
  handleClickRemoveItem = (item) => {
    
   const updatedItems = this.props.cartItems.filter(cart => {return cart !== item  })

   this.props.removeItemFromCart(updatedItems)

  }





render(){
  let cartStatus = this.props.cartStatus
  
  return(
    <div className="cart-container">
    <h1>Your Reservation</h1> 
      
    { cartStatus === "ITEM_ADDED" || "ITEM_REMOVED" && this.props.cartItems.length >= 1 ? 
  <>
    <div className="cart-grid">
        <CartGridHeader/>

    
        {this.props.cartItems.map((item, i) => {
          
          return( 
            <>
              <CartCard 
              key={i}
              item={item} 
              handleClickRemoveItem={this.handleClickRemoveItem}  />
            </>
        )})}
    </div> 
    <div> Grand Total: ${this.props.cartGrandTotal  } </div>
    <div className="checkoutButton" >
          <input
            onClick={this.handleClick}
            type="submit" 
            name="Complete Reservation" 
            value="Complete Reservation" 
            id="checkout" 
            />
      </div>
  </>
      :
      <div>The cart is empty.</div>
      }
  
    </div>
  )
}
}


const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems, 
    cartStatus: state.cart.cartStatus,
    currentUser: state.login.currentUser,
    cartGrandTotal: state.cart.cartGrandTotal,
    receiptID: state.cart.receiptID,
    receiptPostFetchStart: state.cart.receiptPostFetchStart
   }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     receiptPostFetch: (grandTotal) => {
//       dispatch(receiptPostFetch(grandTotal))}
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    
    removeItemFromCart: (updatedItems) => {
      dispatch(removeItemFromCart(updatedItems))
    },   
    
    postCartSuccess:  (reservation) => {
      dispatch(postCartSuccess(reservation))
    },

    reservationPostFetch:  () => {
      dispatch(reservationPostFetch())
    },

    receiptPostFetch:  (cartGrandTotal, cartItems, currentUser, reservationPostFetch) => {
      dispatch(receiptPostFetch(cartGrandTotal,cartItems, currentUser, reservationPostFetch ))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout)
