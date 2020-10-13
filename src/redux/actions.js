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


export const loginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Need work on invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
        } else {
          localStorage.setItem("token", data.token)
          dispatch(loginUser(data.user))
        }
      })
  }
}