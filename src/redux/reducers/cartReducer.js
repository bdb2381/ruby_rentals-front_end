// Set Initial State for reducer

const initialState = {
    //   cartItems: [{
  //     startDate: null,
  //     endDate: null,
     
  //     item: {}
  //   }]
  // },
  cartItems: [],
}


export default function cartReducer(state = initialState, action){

  switch(action.type){
  
      case "ADD_TO_CART":
        console.log(action.payload)
        return {
          ...state,
          cartItems:[...state.cartItems, action.payload],
          // startDate: [...state.startDate, action.payload ]
        }



  default:
    // just incase, return state
    return state
  
  
  } // end switch
} // end function
