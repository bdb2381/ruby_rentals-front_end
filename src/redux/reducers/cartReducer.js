// Set Initial State for reducer

const initialState = {
  // itemsInCart: {
  //   items: [{
  //     startDate: null,
  //     endDate: null,
     
  //     item: {}
  //   }]
  // },
  cartItems: [],
  
  startDate: "2020-01-01",
  endDate: "2020-02-02"
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
