const API_ROOT = `http://localhost:3000/api/v1`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearers ${token}`,
};

//////////////////////
// GET FETCH REQUESTS 

const getItems = () =>{
  return fetch(`${API_ROOT}/items/`, {headers: headers})
  .then((response) => response.json())
}


export default {

  items: {
    getItems
  },






}