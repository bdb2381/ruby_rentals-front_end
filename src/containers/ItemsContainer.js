import React from "react";
import InventoryDetail from '../components/inventoryDetail/InventoryDetail.js'
import ItemCard from '../components/ItemCard/ItemCard.js'
import api from '../services/api.js'
import {connect} from 'react-redux'
import {getItems} from '../redux/fetchActions'



class ItemsContainer extends React.Component {

  componentDidMount = () => { 
     this.props.getItems()
  }
  
  
  render (){
  console.log(this.props.allItems)
    return(
      <div>
        ItemsContainers
       { this.props.allItems.map((item) =>( 
          <ItemCard key={item.id} item={item} />
        )
        )} 
        <InventoryDetail/> 
      </div>
    
    
    
    ) // end return
  } // end render


} // end class 
 

const mapDispatchToProps = (dispatch ) => {
  return {getItems: () => dispatch(getItems())}
}


const mapStateToProps = (state) => {
  // console.log(state)
  return {allItems: state.itemsReducer.allItems }

}



export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)