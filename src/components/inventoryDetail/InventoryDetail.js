import React from 'react';
import {connect} from 'react-redux'
import {setSingleItem} from '../../redux/actions'
import ReservationContainer from '../../containers/ReservationContainer.js'

//////////////
// display single item 
//////////////

const InventoryDetail = (props) => {
  
  const {id, brand, model, day_rental_price, gear_photo_url, size, description} = props.item
  
  
  const altImageTag = `${brand} ${model} ${size} photo` // details for a single piece of inventory/equipment

  props.setSingleItem(props)  // load displayed item into state. Used if item is added to cart

  return(
    <div className="item-container"> 

      <div className="item" id={id}>
        <div className="itemName">
          {brand}  {model} 
        </div>

        <div className="itemPrice">
          Price ${day_rental_price}/day 
        </div>

        <div>
          <img className="itemPhoto" src={gear_photo_url} alt={altImageTag} />
        </div>
        
        <div className="itemDescription">
          {description}
        </div>
      </div> 

      <div className="reservation-container">
        <ReservationContainer />
      </div>

    </div>  // end wrapper div
    ) // end return
} // end InventoryDetail


const mapDispatchToProps = (dispatch) => {
  return {setSingleItem: (item) => dispatch(setSingleItem(item))}
}


export default connect(null, mapDispatchToProps)(InventoryDetail)