// import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";
// import the actionTypes above


// export const addTodo = content => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content
//   }
// });


// add a single from a card to state
export const setSingleItem = (item) => ({
  type: "ADD_SINGLE_ITEM_TO_STATE",
  payload: item
})
