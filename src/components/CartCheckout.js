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
    
    
    this.props.receiptPostFetch(cartGrandTotal, cartItems, currentUser, reservationPostFetch) // post receipt and reservation information
    
    
    this.props.postCartSuccess() // reset state for empty cart & move cart items into purchasedItems state

// below required to create validation
    // total_rental_amount: total,
    // rental_status: selectedInventory.rental_status,
    // requested_quanitity: numberOfItemsReserved

  

  } // end handleClick 


  // remove item from cart
  handleClickRemoveItem = (item) => {
    
   const updatedItems = this.props.cartItems.filter(cart => {return cart !== item  })

   this.props.removeItemFromCart(updatedItems)

  }

 displayItemsInCart = () => {
   if (this.props.cartStatus == "ITEM_ADDED" || this.props.cartStatus == "ITEM_REMOVED" && this.props.cartItems.length >= 1) {

    
  return(
    <>
    <h1>Your Reservation</h1> 
      {/* if cart has 1 item or more, display cart items   */}
    
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
    )
  }
}

displayCartIsEmpty = () => {
  if ( this.props.cartStatus == "CART_EMPTY" || this.props.cartStatus == "ITEM_REMOVED" && this.props.cartItems.length == 0){
    return (<div>The cart is empty.</div>)
  } 
}

displayCartConfirmation = () => {
  if (this.props.cartStatus == "PURCHASED"){
  return(
    <>
      <h1>Order Confirmed #112{this.props.cartGrandTotal}1 </h1> 
      <div className="cart-grid">
      <CartGridHeader/>
      {this.props.purchasedItems.map((item, i) => {
        
              return( 
                <>
                  <CartCard 
                  key={i}
                  item={item} 
                  />
                </>
            )})}
        </div> 
        <div> Grand Total: ${this.props.cartGrandTotal  } </div>
    </>
    )
  }
}



render(){
  
  return(
    <div className="cart-container">
      {/* run each func and check internal display logic to display  */}
      {this.displayItemsInCart()}  
      {this.displayCartIsEmpty()}
      {this.displayCartConfirmation()}    
  
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
    receiptPostFetchStart: state.cart.receiptPostFetchStart,
    purchasedItems: state.cart.purchasedItems
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
