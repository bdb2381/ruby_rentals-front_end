import React from 'react'
import {connect} from 'react-redux'
import {receiptPostFetch, postCartSuccess} from '../redux/fetchActions.js'
import {reservationPostFetch} from '../redux/fetchActions'


class CartCheckout extends React.Component{
    
  handleClick = ()=>{
    // run two nested fetch requests. 
    // 1) Post receipt which then calls 2) post reservation data with receipt id

    const {cartGrandTotal, cartItems, currentUser} = this.props
    
  this.props.receiptPostFetch(cartGrandTotal, cartItems, currentUser, reservationPostFetch)
  
// below required to create validation
    // total_rental_amount: total,
    // rental_status: selectedInventory.rental_status,
    // requested_quanitity: numberOfItemsReserved


    this.props.postCartSuccess()
    debugger

console.log("end of handleClick")

  } // end handleClick 


render(){
  let cartStatus = this.props.cartStatus
  
  return(
    <div className="cart-container">
    <h1>Your Reservation</h1> 
      
    { cartStatus === "ITEM_ADDED" ? 
<>
    <div className="cart-grid">
              <div className="cartHeader">Item Description</div>
              <div className="cartHeader">Pickup Date</div>
              <div className="cartHeader">Return Date</div>
              <div className="cartHeader">Each/Day</div>
              <div className="cartHeader">Quantity</div>
              <div className="cartHeader">Total</div>

    
        {this.props.cartItems.map((item, i) => {
          return( 
            <>
              <div key={i} className="cartDesc">
              {item.model} {item.item_type}<br/> 
              {item.brand}<br/>
              </div>
              <div className="dates">{item.startDate}</div>
              <div className="dates">{item.returnDate}</div>
              <div className="financial">$ ${item.day_rental_price} </div>
              <div className="financial">{item.numberOfItemsReserved}</div>
              <div className="financial">${item.total_rental_amount} </div>
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
    postCartSuccess:  (reservation) => {
      dispatch(postCartSuccess(reservation))} ,

    reservationPostFetch:  () => {
      dispatch(reservationPostFetch())} ,

      receiptPostFetch:  (cartGrandTotal, cartItems, currentUser, reservationPostFetch) => {
        dispatch(receiptPostFetch(cartGrandTotal,cartItems, currentUser, reservationPostFetch ))}

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout)
