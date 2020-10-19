// Set Initial State for reducer

const initialState = {
  cartItems: [],
  purchasedItems:[],
  cartStatus: "CART_EMPTY",
  cartGrandTotal: 0,
  receiptID: null
}


export default function cartReducer(state = initialState, action){

  switch(action.type){
  
      case "ADD_TO_CART":
        console.log(action.payload)
        return {
          ...state,
          cartItems:[...state.cartItems, action.payload],
          cartStatus: "ITEM_ADDED",
          cartGrandTotal: parseInt( state.cartGrandTotal + action.payload.total_rental_amount)

        }

      case "PURCHASE_SUCCESS":
        return {
          purchasedItems: action.payload,
          cartItems: [],  // reset cart upon success
          // receiptID: null // reset receipt
        }
      
      case "RECEIPT_SUCCESS":
        return {
          receiptID: action.payload
          // payload is a pure integer
        }
      
  default:
    // just incase, return state
    return state
  
  
  } // end switch
} // end function
