import React from 'react'
import {connect} from 'react-redux'
import {receiptPostFetch} from '../redux/fetchActions.js'
import {reservationPostFetch} from '../redux/fetchActions'


class CartCheckout extends React.Component{
  
  
  handleClick = ()=>{
    const {cartItems, currentUser} = this.props
    
// X currentUser.id 
// cartItems[0].inventory[0].id
// cartItems[0].inventory[0].rental_status
// cartItems[0].amount_available  <-not in table for calcs only 
// cartItems[0].numberOfItemsReserved
// cartItems[0].returnDate
// cartItems[0].startDate
// need receipt id 



  let reservationDetails = {
    total_rental_amount: total,
    user_id: currentUser.id,
    // requested_quanitity: numberOfItemsReserved,
  }

// loop through each obj in cart, add together their subtotals to produce grandTotal
let total =  cartItems.reduce((prev, cur) => {
      return prev + cur.total_rental_amount
    }, 0);
    
      const grandTotal = {
        total_rental_amount: total
      }
     
      // this.props.receiptPostFetch(grandTotal)
      
      this.props.reservationPostFetch(grandTotal)
    


  }

render(){
  return(
    <div className="cart-container">
      <div className="cart">

        {this.props.cartItems.map((item, i) => {
          return( 
            <div>

            <div className="reserved">
              
            {item.model}<br/> 
            {item.brand}<br/>
            {item.item_type}<br/>

            </div>

          <div className="financial">
            ${item.day_rental_price}/day   <br/>
            Quantity: {item.numberOfItemsReserved} <br/>  
            Cost: ${item.total_rental_amount}   <br/>
          </div>

          <div className="dates">
            Pickup: {item.startDate}<br/>
            Return: {item.returnDate} 
          </div>

          </div> 
        )})}
      </div>
          
        
        <div className="checkoutButton" >

          <input
            onClick={this.handleClick}
            type="submit" 
            name="Checkout Equipment" 
            value="Checkout Equipment" 
            id="checkout" 
            // className="checkoutButton"
            />
        </div>

    </div>
  )
}
}


const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems, 
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
