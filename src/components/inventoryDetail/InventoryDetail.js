import React from 'react';

const InventoryDetail = (props) => {
  const {id, brand, model, day_rental_price, gear_photo_url, size, description} = props.item
  console.log(props)


//   item:
// amount_available: 15
// brand: "Nemo"
// day_rental_price: 25
// description: "Firefly™ strikes a unique balance between affordability and lightweight livability in a freestanding backpacking tent. The large trapezoidal vestibules are designed to fit gear without obstructing entry and have multiple roll-back points to customize visibility and airflow. It's agile on the trail, quick to set up, and well-appointed for rejuvenation in camp."
// gear_photo_url: "https://www.nemoequipment.com/wp-content/uploads/szegowzpck69xqeeiayp-1024x866.jpg"
// id: 18
// inventory: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// item_type: "Tent"
// model: "Firefly™ Backpacking Tent"
// model_year: 2020
// size: "2 Person"
  const altImageTag = `${brand} ${model} ${size} photo`

    return(
      <div className="item">

      <div className="itemName">
         {brand}  {model} 
          {/* Black Diamond Mission 55 */}
      </div>

      <div className="itemPrice">
        Price {day_rental_price}/day 
        Price $30/day
      </div>


      <div>
        <img className="itemPhoto" src={gear_photo_url} alt={altImageTag} />
      </div>
      
      <div className="itemDescription">
        {description}
      </div>




      </div>  // end wrapper div
    ) // end return




} // end InventoryDetail

export default InventoryDetail;
