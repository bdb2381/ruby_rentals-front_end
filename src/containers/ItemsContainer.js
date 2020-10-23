import React from "react";
import {connect} from 'react-redux'
import {getItems} from '../redux/fetchActions'
import { Route, Switch } from "react-router-dom";

import InventoryDetail from '../components/inventoryDetail/InventoryDetail.js'
import ItemsList from '../components/ItemsList.js'


class ItemsContainer extends React.Component {
  
  componentDidMount = () => { 
    this.props.getItems()
    // returns props as: this.props.allItems
  }
  
  render (){
    return (
      <div>                
        <Switch>
          <Route exact path="/gear/:gearId" render={(routerProps) =>{ 
            
            const gearId = routerProps.match.params.gearId
            const item = this.props.allItems.find(i => i.id === parseInt(gearId))

            return item ? <InventoryDetail item={item} /> 
            
            : "Loading..."
          }}/>

          <Route path="/gear" render={() => {
            return <ItemsList/>}
          }/>      
        </Switch>
          
     
    </div> // end container div 
    ) // end return
  } // end render
} // end class 
 

// get each item from the store
const mapDispatchToProps = (dispatch ) => {
  return {getItems: () => dispatch(getItems())}
}


const mapStateToProps = (state) => {
  return {allItems: state.item.allItems }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)