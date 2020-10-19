import React from 'react'
import {connect} from 'react-redux'
import {receiptPostFetch} from '../redux/fetchActions.js'
import {reservationPostFetch} from '../redux/fetchActions'


class CartCheckout extends React.Component{
    
  handleClick = ()=>{

    this.props.receiptPostFetch(this.props.cartGrandTotal)
  
    const {cartItems, currentUser} = this.props
console.log(this.props.receiptID)
    for (let i = 0; i <= cartItems.length-1; i++){

      // REFACTOR: get several items if several requested
      // get available-to-rent inventory item
      let selectedInventory = cartItems[i].inventory.find(x => {
        if (x.rental_status === true){
        return x
      }})

    
    const reserveredGear =  {numberOfItemsReserved: cartItems[i].numberOfItemsReserved, returnDate: cartItems[i].returnDate, startDate: cartItems[i].startDate,  amount_available: cartItems[i].amount_available}

      // creates object to send POST fetch 
    
    let reservationDetails = {
      start_date: reserveredGear.startDate, 
      end_date: reserveredGear.returnDate,
      user_id: currentUser.id,
      inventory_id: selectedInventory.id, 
      receipt_id: this.props.receiptID
    }

console.log(reservationDetails)


    this.props.reservationPostFetch(reservationDetails)

    } // end for loop  

// below required to create validation
    // total_rental_amount: total,
    // rental_status: selectedInventory.rental_status,
    // requested_quanitity: numberOfItemsReserved

     


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
    receiptID: state.cart.receiptID
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

      receiptPostFetch:  (cartGrandTotal) => {
      dispatch(receiptPostFetch(cartGrandTotal))}

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout)
