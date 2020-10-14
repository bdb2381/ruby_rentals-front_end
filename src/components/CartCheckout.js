import React from 'react'
import {connect} from 'react-redux'


const CartCheckout = (props) => {
// cartItems: Array(1)
// 0:
// amount_available: 15
// brand: "Black Diamond"
// day_rental_price: 30
// description: "Durable top-loading alpine pack engineered for everything from summer alpine cragging to gear-intensive winter expeditions, the Mission 75 gets your gear to the base in comfort."
// gear_photo_url: "https://www.blackdiamondequipment.com/on/demandware.static/-/Sites-bdel/default/dwde1f0a5f/products/F18_Product_Images/Equipment/681185_CBBK_Cobalt_Black_Mission75_Frnt.jpg"
// id: 13
// inventory: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// item_type: "Backpack"
// model: "Mission"
// model_year: 2020
// size: "75 Liters"


  return(
    <div>
      <div>
        Items in Your Cart
      </div>

      <div>
        {props.cartItems.map((item, i) => {
          return( 
            <p> {item.brand} {item.model} {item.item_type} - ${item.day_rental_price}/day</p>
            )
          })}
      </div>
    </div>
  )

}


const mapStateToProps = (state) => {
  return {cartItems: state.cartReducer.cartItems }
}




export default connect(mapStateToProps)(CartCheckout)