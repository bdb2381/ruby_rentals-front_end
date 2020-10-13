

const initialState = {
    
    currentUser:{}
  
}

export default function loginReducer(state = initialState, action){
    console.log(state)
    console.log(action.type)
    switch(action.type){
        case 'LOGIN_USER':
            // payload is user object 
            return {...state, currentUser: action.payload}
        default:
            return state
    }
}