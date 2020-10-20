// import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";
// import the actionTypes above


// export const addTodo = content => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content
//   }
// });


// add a single inventory type from a inventory page to state
export const setSingleItem = (item) => ({
  type: "ADD_SINGLE_ITEM_TO_STATE",
  payload: item
})


export const addItemToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item
})


export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

export const removeItemFromCart = (updatedItems) => ({
  type:     "REMOVE_SINGLE_ITEM_FROM_CART",
  payload: updatedItems

})