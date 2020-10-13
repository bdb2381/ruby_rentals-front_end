//////////////////////
// universal FETCH headers and tokens
const API_ROOT = `http://localhost:3000/api/v1`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearers ${token}`,
};



//////////////////////
export const GET_ITEMS_BEGIN   = 'GET_ITEMS_BEGIN';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

export const getItemsBegin = () => ({
  type: GET_ITEMS_BEGIN
});

export const getItemsSuccess = items => ({
  type: GET_ITEMS_SUCCESS,
  payload: { items }
});

export const fetchItemsFailure = error => ({
  type: GET_ITEMS_FAILURE,
  payload: { error }
});





//////////////////////
// GET FETCH REQUESTS 

// load items from inventory 
export const getItems = () =>{
  
  return dispatch => {
   dispatch(getItemsBegin())
    return fetch(`${API_ROOT}/items/`, {headers: headers})
    .then(handleErrors)
    .then((response) => response.json())
    .then(items => {
      dispatch(getItemsSuccess(items))
      return items     
    })
    .catch(error => dispatch(fetchItemsFailure(error)));
  }
}

// Handle HTTP errors since fetch won't.
export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}



// // user login 
// const login = (email, password) => {
//   return fetch(`${API_ROOT}/login`, {
//     method: "POST",
//     headers: headers,
//     body: JSON.stringify({ email, password }),
//   }).then((res) => res.json());
// };



// CREATE/POST a new user account 
export const signupPostFetch = user => {

  return dispatch => {
    return fetch(`${API_ROOT}/users/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({user})
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.message || data.error){
        console.log(data.message)
        console.log(data.error)
      }
      else {
        console.log(data.user)
        localStorage.setItem("token", data.jwt)
        
        dispatch(loginUser(data.user))
      }
    })

  } // end first return
} // end signupPostFetch

//////////////////////
// userObject from signupPOstFetch looks like
// {
//   user: { 
//     email: "the email",
//     password: "[filter]",
//     city: "the city"
//     // and so on
//   }
//   token: "aaaaaa.xxxxx.mmmmmm"
// }
//////////////////////


const loginUser = userObject => (
  console.log(userObject),
  {
  type: 'LOGIN_USER',
  payload: userObject
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



// Unhandled Rejection (TypeError): Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present.
// (anonymous function)
// src/redux/fetchActions.js:93
//   90 |   }
//   91 |   else {
//   92 |     console.log(data)
// > 93 |     localStorage.setItem("token, data.token")
//      | ^  94 |     dispatch(loginUser(data.user))
//   95 |   }
//   96 | })
// View compiled