import React from "react";
import {connect} from 'react-redux'
import {getItems} from '../redux/fetchActions'
import { Route, Switch } from "react-router-dom";

import InventoryDetail from '../components/inventoryDetail/InventoryDetail.js'
import ItemsList from '../components/ItemsList.js'
// import api from '../services/api.js'
import ItemCard from '../components/ItemCard/ItemCard.js'


class ItemsContainer extends React.Component {

  
  componentDidMount = () => { 
    this.props.getItems()

    // returns as this.props.allItems
  }
  
 
  
  render (){
    console.log(this.props.allItems, "top of render")

    return (
      <div> 
   
          
                
          {/* console.log(match.params.gearId), */}
Text to show if something renders 


        {/* { this.props.allItems.map((item) =>(  
           <Link exact to={`/gear/${item.id}`}>
              <ItemCard key={item.id} item={item} />
          </Link>
        ))}  */}
              
        <Switch>
          <Route exact path="/gear/:gearId" render={(routerProps) =>{ 
            
            const gearId = routerProps.match.params.gearId
            const item = this.props.allItems.find(i => i.id === parseInt(gearId))
            return item ? <InventoryDetail item={item} /> : "Loading..."
          }}/>

        {/* { this.props.allItems.map((item) =>(  
           <Link exact to={`/gear/${item.id}`}>
              <ItemCard key={item.id} item={item} />
          </Link>
        ))}  */}
             


             {/* items={this.props.allItems} */}
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
  // console.log(state)
  return {allItems: state.itemsReducer.allItems }

}



export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)