import React from "react";
import ItemCard from '../components/ItemCard/ItemCard.js'
import {connect} from 'react-redux'

const ItemsList = (props) => { 
  console.log(props, "insideItemsList")

// debugger
  // const items = props.items.map((props.item) => {(  
  //   <ItemCard key={item.id} item={item} match={match} />
  // )})

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
  // console.log(state)
  return {allItems: state.itemsReducer.allItems }

}



export default connect(mapStateToProps)(ItemsList)