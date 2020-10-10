import React from 'react';

const InventoryDetail = (props) => {
  // const {id, item} = props
  // console.log(item)


    return(
      <div className="item">

      <div className="itemName">
         {/* {props.brand}  {props.model}  */}
          Black Diamond Mission 55
      </div>

      <div className="itemPrice">
        {/* Price {props.day_rental_price}/day  */}
        Price $30/day
      </div>


      <div>
        {/* <img src={props.gear_photo_url}/> */}
        <img className="itemPhoto" src={
        'https://www.blackdiamondequipment.com/on/demandware.static/-/Sites-bdel/default/dwde1f0a5f/products/F18_Product_Images/Equipment/681185_CBBK_Cobalt_Black_Mission75_Frnt.jpg'} />
      </div>
      
      <div className="itemDescription">
        {/* {props.description} */}
      Durable top-loading alpine pack engineered for everything from summer alpine cragging to gear-intensive winter expeditions, the Mission 75 gets your gear to the base in comfort.
      </div>




      </div>  // end wrapper div
    ) // end return




} // end InventoryDetail

export default InventoryDetail;
