import React from 'react'


const ItemCard = () => {


return (
  <div>
    
    <div className="card">
      ItemCard
      <div>
        {/* <img src={props.gear_photo_url}/> */}
        <img className="itemPhoto" src={
        'https://www.blackdiamondequipment.com/on/demandware.static/-/Sites-bdel/default/dwde1f0a5f/products/F18_Product_Images/Equipment/681185_CBBK_Cobalt_Black_Mission75_Frnt.jpg'} alt="gear_photo" />
      </div>
      <div className="itemContent">
          Backpacks
      </div>

      </div>
    

  </div> // closing div

)



} // end ItemCard

export default ItemCard
