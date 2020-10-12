// Set Initial State for reducer

const initialState = {
  itemsInCart: {},

}


export default function cartReducer(state = initialState, action){

  switch(action.type){
    case "ADD_TO_CART":
      return {
        ...state,
        itemsInCart:[...state.itemsInCart, action.payload.itemsInCart]
      }

  default:
    // just incase, return state
    return state
  
  
  } // end switch
} // end function
