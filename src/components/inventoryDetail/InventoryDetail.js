import React from 'react';

import ReservationContainer from '../../containers/ReservationContainer.js'

const InventoryDetail = (props) => {
  const {id, brand, model, day_rental_price, gear_photo_url, size, description} = props.item
  console.log(props)

  ////////////////
  // Render the details for a single peice of inventory/equipment

//   item:
// amount_available: 15
// gear_photo_url: "https://www.nemoequipment.com/wp-content/uploads/szegowzpck69xqeeiayp-1024x866.jpg"
// id: 18
// inventory: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// model_year: 2020
// size: "2 Person"
  const altImageTag = `${brand} ${model} ${size} photo`

    return(
      <div> 

      <div className="item">

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
        <ReservationContainer   />
      </div>
    



      </div>  // end wrapper div
    ) // end return




} // end InventoryDetail

export default InventoryDetail;
