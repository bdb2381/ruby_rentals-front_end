import React from 'react'


const ItemCard = (props) => {
 const {id, brand, model, size, gear_photo_url, item_type, day_rental_price, }=props.item 
  console.log(gear_photo_url)

return (
  <div>
    
    <div className="card">
      <div>
        <img className="itemPhoto" src={gear_photo_url} alt="gear photo"/>
      </div>
      <div className="itemContent">
        <div className="brand">
          {brand}
        </div>
        <div className="model">
          {model} {size}
        </div>
        <div className="category">
           {item_type}
        </div>
      </div>

      </div>
    

  </div> // closing div

)



} // end ItemCard

export default ItemCard
