import React from "react";
import InventoryDetail from '../components/inventoryDetail/InventoryDetail.js'
import ItemCard from '../components/ItemCard/ItemCard.js'
import api from '../services/api.js'

class ItemsContainer extends React.Component {

  componentDidMount = () => { 
    api.items.getItems().then(response =>console.log(response) )
     
  }
  
  
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