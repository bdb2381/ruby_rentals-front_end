import React from 'react'
import {connect} from 'react-redux'
import {receiptPostFetch} from '../redux/fetchActions.js'
import {reservationPostFetch} from '../redux/fetchActions'


class CartCheckout extends React.Component{
    
  handleClick = ()=>{
    
    const {cartItems, currentUser} = this.props
    
    this.props.receiptPostFetch(this.props.cartGrandTotal, this.props.cartItems, this.props.currentUser, reservationPostFetch)
  
// below required to create validation
    // total_rental_amount: total,
    // rental_status: selectedInventory.rental_status,
    // requested_quanitity: numberOfItemsReserved

     
console.log("end of handleClick")

  } // end handleClick 


//   produceGrandTotal = () => {
//   // Produce grand total amount user pays
//   let total =  this.props.cartItems.reduce((prev, cur) => {
//     return prev + cur.total_rental_amount
//   }, 0);
//   const grandTotal = {
//     total_rental_amount: total
//   }
//   return grandTotal
// } // end produceGrandTotal






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
    reservationPostFetch:  (reservation) => {
      dispatch(reservationPostFetch(reservation))} ,

      receiptPostFetch:  (cartGrandTotal, cartItems, currentUser, reservationPostFetch) => {
        dispatch(receiptPostFetch(cartGrandTotal,cartItems, currentUser, reservationPostFetch ))}

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout)
