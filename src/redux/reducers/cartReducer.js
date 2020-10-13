// Set Initial State for reducer

const initialState = {
  // itemsInCart: {
  //   items: [{
  //     startDate: null,
  //     endDate: null,
  //     inventory: null,
  //     itemCost: 0,
  //     item: {}
  //   }]
  // },
  cartItems: [],
  totalNumberOfItems: 0

}


export default function cartReducer(state = initialState, action){

  switch(action.type){
  
      case "ADD_TO_CART":
        console.log(action.payload)
        return {
          ...state,
          cartItems:[...state.cartItems, action.payload]
        }



  default:
    // just incase, return state
    return state
  
  
  } // end switch
} // end function
