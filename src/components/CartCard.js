import React from 'react'
import {connect} from 'react-redux'

const CartCard = (props) => {

  const {model, 
  id,
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
    <div className="financial">$ ${day_rental_price} </div>
    <div className="financial">{numberOfItemsReserved}</div>
    <div className="financial">${total_rental_amount} </div>
    
    {/* display remove item on if order is final or not */}
    {props.cartStatus == "ITEM_ADDED" 
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