import React from 'react'
import {Link} from 'react-router-dom'


////////////////
// Render a single item/gear card

const ItemCard = (props) => {
 const {id, brand, model, size, gear_photo_url, item_type, day_rental_price, } = props.item 
 
const altImageTag = `${brand} ${model} ${size} ${item_type} photo`

  return (
    <div className="card-container">
      
    <Link exact to={`/gear/${id}`}>
      <div className="card" id={id}>
        <div>
          <img className="itemPhoto" src={gear_photo_url} alt={altImageTag}/>
        </div>

        <div className="itemContent">
          <div className="brand">
            {brand}
          </div>

          <div className="model">
            {model} {size}
          </div>

          <div className="category_price">
            {item_type} | ${day_rental_price}/day
          </div>
        </div>
        </div>
      </Link>
    

  </div> // closing return div
  ) // end return 

} // end ItemCard

export default ItemCard
