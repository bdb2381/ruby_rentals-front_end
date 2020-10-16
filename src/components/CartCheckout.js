import React from 'react'
import {connect} from 'react-redux'
import {receiptPostFetch} from '../redux/fetchActions.js'
import {reservationPostFetch} from '../redux/fetchActions'


class CartCheckout extends React.Component{
  
  
  handleClick = ()=>{
    const {cartItems, currentUser} = this.props
    

  // produce an item's first available inventory item. 
  // only works with 1 item as of 10/15/20 
  let [selectedInventory] = cartItems.map(item => {
    return(
      item.inventory.find(i => {
        if (i.rental_status=true){
          return i
        }
    }))}
  )
  console.log(selectedInventory)
  // selectedInventory.rental_status
  // selectedInventory.id 


 // provide object of reserved gear details
const [reserveredGear] = cartItems.map(item => {
return ({
  numberOfItemsReserved: item.numberOfItemsReserved,
  returnDate: item.returnDate,
  startDate: item.startDate,
  amount_available: item.amount_available})
})
// reserveredGear gives back object:
  // { numberOfItemsReserved: "1", 
  // returnDate: "2020-02-02",
  //  startDate: "2020-01-01", 
  //  amount_available: 15 }




  // creates object to send POST fetch 
  let reservationDetails = {
    start_date: reserveredGear.startDate, 
    end_date: reserveredGear.returnDate,
    user_id: currentUser.id,
    inventory_id: selectedInventory.id,
    receipt_id: 2
  }

// below required to create validation
    // total_rental_amount: total,
    // rental_status: selectedInventory.rental_status,
    // requested_quanitity: numberOfItemsReserved



  // Produce grand total amount user pays
  let total =  cartItems.reduce((prev, cur) => {
        return prev + cur.total_rental_amount
      }, 0);
    
      const grandTotal = {
        total_rental_amount: total
      }
     
  // this.props.receiptPostFetch(grandTotal)
  this.props.reservationPostFetch(reservationDetails)

  } // end handleClick 

render(){
  let cartStatus = this.props.cartStatus

  return(
    <div className="cart-container">
    <h1>Your Reservation</h1> 
    
    
    {

    cartStatus == "ITEM_ADDED" ? 
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
              <div className="cartDesc">
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
    currentUser: state.login.currentUser
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
    reservationPostFetch:  (XXX) => {
      dispatch(reservationPostFetch(XXX))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout)
