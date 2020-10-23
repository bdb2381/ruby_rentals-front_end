import React from 'react'

import Login from '../components/Login'

class LoginContainer extends React.Component {

// handleRedirectUponLogin(props){
//   this.props.history.push("/")
// }


render(){
  let redirect = this.props.history
  
  return(
    <div> 
      <Login redirect={redirect}/>
    </div>




  ) // end return 
} // end render
} // end class 

export default LoginContainer