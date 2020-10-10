import React from "react";
import ItemCard from '../components/ItemCard/ItemCard.js'


const ItemsList = (props) => { 
  console.log(props, "insideItemsList")

// debugger
  // const items = props.items.map((props.item) => {(  
  //   <ItemCard key={item.id} item={item} match={match} />
  // )})


  const items = props.items.map((item) =>  ( 
    <ItemCard key={item.id} item={item}  />)
  )


    return (
      <div>
        {items}
      </div>
    )


}

export default ItemsList