import React from 'react'

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
    <div className="remove" onClick={() => props.handleClickRemoveItem(props.item) }> Remove </div>

</>
  
)





}

export default CartCard