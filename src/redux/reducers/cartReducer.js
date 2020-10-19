// Set Initial State for reducer

const initialState = {
  cartItems: [],
  purchasedItems:[],
  cartStatus: "CART_EMPTY",
  cartGrandTotal: 0,
  receiptID: null,
  receiptPostFetchStart: false,
  reservationPostFetchStart: false
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
          cartStatus: "CART_EMPTY",
          cartGrandTotal: 0,
          // receiptID: null,   can't reset otherwise bug due to loop in receipt post fetch
          receiptPostFetchStart: false,
          reservationPostFetchStart: false
        }
      
      case "RECEIPT_BEGIN_FETCH_POST":
        return {
          ...state,
          receiptPostFetchStart: true
        }  


      case "RECEIPT_SUCCESS":
console.log(action.payload)
        return {
          ...state,
          receiptID: action.payload,
          receiptPostFetchStart: false
          // payload is a pure integer
        }

      case "RESERVATION_BEGIN_FETCH_POST":
console.log(action.payload)

        return {
          ...state,
          reservationPostFetchStart: true
        }
      
  default:
    // just incase, return state
    return state
  
  
  } // end switch
} // end function
