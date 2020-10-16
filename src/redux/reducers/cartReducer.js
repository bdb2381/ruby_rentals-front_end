// Set Initial State for reducer

const initialState = {
  cartItems: [],
  purchasedItems:[],
  cartStatus: "CART_EMPTY"
}


export default function cartReducer(state = initialState, action){

  switch(action.type){
  
      case "ADD_TO_CART":
        console.log(action.payload)
        return {
          ...state,
          cartItems:[...state.cartItems, action.payload],
          cartStatus: "ITEM_ADDED"
        }

      case "PURCHASE_SUCCESS":
        return {
          purchasedItems: action.payload,
          cartItems: []  // clear cart upon success
          
        }
      case "ITEM_ADDED":
          return {
            ...state,
            
          }
  default:
    // just incase, return state
    return state
  
  
  } // end switch
} // end function
