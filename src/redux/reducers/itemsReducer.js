////////////////
// Import select actions for this reducer here
///////////////


// import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";


import { 
  GET_ITEMS_BEGIN,
  GET_ITEMS_FAILURE,
  GET_ITEMS_SUCCESS
} from '../fetchActions'



// Set Initial State for reducer
const initialState = {
  allItems: [],
  loading: false,
  error: null
};




////////////////
// Reducer w/ switch statements to cause state to change

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_BEGIN:
      // Mark the state as "loading" so we can show loading if it takes a while
    return {
      ...state, 
      loading: true,
      error: null
    }

    case GET_ITEMS_SUCCESS:
      // load item types into state
      // when finished, indicate loading is done (false)
      return {
        ...state,
        loading: false,
        allItems: action.payload.items
      }

    case GET_ITEMS_FAILURE:
      // if error loading, record the error
      // indicate loading finished (false)
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        allItems: {}
      }

    default:
      // just incase, return state
      return state


  } // end switch

} // end function

