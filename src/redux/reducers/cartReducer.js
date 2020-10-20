// Set Initial State for reducer

const initialState = {
  cartItems: [],
  purchasedItems: [],
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
          purchasedItems: state.cartItems,
          cartItems: [],  // reset cart upon success
          cartStatus: "PURCHASED",
          cartGrandTotal: state.cartGrandTotal,
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
        return {
          ...state,
          reservationPostFetchStart: true
        }
      
      case "REMOVE_SINGLE_ITEM_FROM_CART":
  console.log(action.payload)
        return {
          ...state, 
          cartItems: action.payload,
          cartStatus: "ITEM_REMOVED",
        }



  default:
    // just incase, return state
    return state
  
  
  } // end switch
} // end function
