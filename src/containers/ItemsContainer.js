import React from "react";
import InventoryDetail from '../components/inventoryDetail/InventoryDetail.js'
import ItemCard from '../components/ItemCard/ItemCard.js'
import api from '../services/api.js'
import {connect} from 'react-redux'
import {getItems} from '../redux/fetchActions'
import { Route, useRouteMatch, Link, Switch  } from "react-router-dom";


// <Link to={`/gear/${item.id}`}></Link>

class ItemsContainer extends React.Component {

  
  componentDidMount = () => { 
    this.props.getItems()
  }
  
 
  
  render (match){
    
    return (
    <div> 


      { this.props.allItems.map((item) =>(  
        <Link to={`/gear/${item.id}`}>
          <ItemCard key={item.id} item={item} match={match} />
        </Link>
        
        ))} 
        <Route exact={true} path={`/gear/:gearId`} render={({match}) =>( 
          console.log(match.params.gearId),
          <InventoryDetail
          id={parseInt(match.params.gearId)} 
          />
        )}/>
          
     
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