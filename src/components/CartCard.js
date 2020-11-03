import React from 'react'
import {connect} from 'react-redux'

//////////////
// display items for reservations confirmation screen & order
//////////////

const CartCard = (props) => {

  const {model, 
  item_type,
  brand,
  startDate,
  returnDate,
  day_rental_price,
  numberOfItemsReserved,
  total_rental_amount
} = props.item



return(
<>
    <div className="cartDesc">
      {model} {item_type}<br/> 
      {brand}<br/>
    </div>
    <div className="dates">{startDate}</div>
    <div className="dates">{returnDate}</div>
    <div className="financial">${day_rental_price} </div>
    <div className="financial">{numberOfItemsReserved}</div>
    <div className="financial">${total_rental_amount} </div>
    
    {/* display "Remove" option if order is final and render blank div for css */}
    {props.cartStatus !== "PURCHASED"
      ? (<div className="remove" onClick={() => props.handleClickRemoveItem(props.item) }> Remove </div>)
      : (<div></div> )
    }

</>
  
  )
}


const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems, 
    cartStatus: state.cart.cartStatus,
  }
}


export default connect(mapStateToProps)(CartCard)