//////////////////////
// universal FETCH headers and tokens
const API_ROOT = `http://localhost:3000/api/v1`;

// const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  // Authorization: `Bearers ${token}`,
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


