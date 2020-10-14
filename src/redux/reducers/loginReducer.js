

const initialState = {
    
    currentUser:{}
  
}

export default function loginReducer(state = initialState, action){
    console.log(action.type)
    
    switch(action.type){
        case 'LOGIN_USER':
            // payload is user object 
            return {
                ...state,
                currentUser: action.payload
            }
        case 'LOGOUT_USER':
            return {
                ...state, 
                currentUser: {} }
        default:
            return state
    }
}

