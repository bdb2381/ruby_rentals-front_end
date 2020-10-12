// Set Initial State for reducer

const initialState = {
  item: [],
  
};


export default function currentItemReducer(state=initialState, action){

  switch (action.type){
    case "ADD_SINGLE_ITEM_TO_STATE":
      return {
        ...state,
        item: action.payload.item
      }
    default:
      return state

  }
}