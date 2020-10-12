import React from "react";
import ItemCard from '../components/ItemCard/ItemCard.js'
import {connect} from 'react-redux'

const ItemsList = (props) => { 

  const items = props.allItems.map((item) =>  ( 
    <ItemCard key={item.id} item={item}  />)
  )

  return (
    <div>
      {items}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {allItems: state.itemsReducer.allItems }
}



export default connect(mapStateToProps)(ItemsList)