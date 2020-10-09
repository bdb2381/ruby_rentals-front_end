import React from "react";
import InventoryDetail from '../components/inventoryDetail/InventoryDetail.js'
import ItemCard from '../components/ItemCard/ItemCard.js'


class ItemsContainer extends React.Component {


  render (){
    return(
      <div>
        ItemsContainers
        <ItemCard/>
        <InventoryDetail/> 
      </div>
    
    
    
    ) // end return
  } // end render


} // end class 
 
export default ItemsContainer