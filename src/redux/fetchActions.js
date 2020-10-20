//////////////////////
// universal FETCH headers and tokens
const API_ROOT = `http://localhost:3000/api/v1`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${token}`
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


export const postCartSuccess = reservation => ({
  type: "PURCHASE_SUCCESS",
  payload: {reservation}
})

export const postReceiptSuccess = dataID => ({
  type: "RECEIPT_SUCCESS",
  payload: {dataID}
})

export const postReceiptBegin = () => ({
  type: "RECEIPT_BEGIN_FETCH_POST"
})

export const postReservationBegin = () => (
  
  console.log("inside action creator of post rese"),
  {
  type: "RESERVATION_BEGIN_FETCH_POST"
})

//////////////////////
// POST FETCH REQUESTS 

export const reservationPostFetch = (reservation) => {
console.log("in res post fetch", reservation)
  return dispatch => {
    dispatch(postReservationBegin())
    return fetch(`${API_ROOT}/reservations/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(reservation)
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.message || data.error){
        console.log(data.error)
      }
      else {
        console.log("res post fetch finish" , data)

      }
    })  
  } // end first return 
} // end receiptPostFetch



export function receiptPostFetch(total, cartItems, currentUser, reservationPostFetch) {
  
  return dispatch => {
    dispatch(postReceiptBegin())
     return fetch(`${API_ROOT}/receipts/`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ 
        total_rental_amount: total,
        tax: 0 // hardcode until implemented
        })
      })
      .then(resp => resp.json())
      .then(data => {
        if (data.message || data.error){
          console.log(data.message)
          console.log(data.error)
          
        }
        else {

console.log(data.receipt.id)

    for (let i = 0; i <= cartItems.length-1; i++){
          // REFACTOR selectedInventory to allow selecting several items if several requested
          // get available-to-rent inventory item
          let selectedInventory = cartItems[i].inventory.find(x => {
            if (x.rental_status === true){
            return x
          }})
        
        const reservedGear =  {numberOfItemsReserved: cartItems[i].numberOfItemsReserved, returnDate: cartItems[i].returnDate, startDate: cartItems[i].startDate,  amount_available: cartItems[i].amount_available}

          // creates object to send POST fetch 
        let reservationDetails = {
          start_date: reservedGear.startDate, 
          end_date: reservedGear.returnDate,
          user_id: currentUser.id,
          inventory_id: selectedInventory.id, 
          receipt_id: data.receipt.id
        }

        // persist reservationDetails to database
          dispatch(reservationPostFetch(reservationDetails))

      } // end for loop 


        }
      })
  } // end first return 
} // end receiptPostFetch




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


//////////////////////////
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



/////////////////////
// set user object to state 
const loginUser = userObject => (
  {
  type: 'LOGIN_USER',
  payload: userObject
})


//////////////////////
//  user login. GET fetch 
export const loginFetch = user => {
  console.log(user)
  return dispatch => {
    return fetch(`${API_ROOT}/login/`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // invalid login credentials msg from auth_controller
         
        } else {
          localStorage.setItem("token", data.jwt)
          localStorage.setItem("user", data.user.id)
          console.log(data.user)
          dispatch(loginUser(data.user))
        }
      })
  }
}

export const getProfileFetch = () => {
  return dispatch => {
    
    const jwtToken = localStorage.token
    
    if (jwtToken){
      
      return fetch(`${API_ROOT}/reauth/`,{ 
        method: "GET",      
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${jwtToken}`
        }
    })
    .then(resp => resp.json())
    .then(data => {
        if (data.message){
          // diplay error from auth_controller
          console.log(data.message)
          localStorage.removeItem("jwtToken")
        }
        else {
          localStorage.setItem("user", data.user.id)
          dispatch(loginUser(data.user))
        }
      })
    }
  } // end return
} // end getProfileFetch