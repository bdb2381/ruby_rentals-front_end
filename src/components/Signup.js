import React from 'react'
import {connect} from 'react-redux'
import {signupPostFetch} from '../redux/fetchActions'



class Signup extends React.Component {

  state = {
    email: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
    street_address: "", 
    city: "",
    state: "",
    zip_code: "",
    phone: "",
  }

  handleSignupChange = event => {
    this.setState({   
      [event.target.name]: event.target.value
    }
    )
  }

handleSubmit = (event) => {
  event.preventDefault()
  this.props.signupPostFetch(this.state)
  this.props.history.push("/")
}

render(){
  return(
<div className="signup-container">
    <form 
      onSubmit={this.handleSubmit} 
    >
      <div className="sign-form-left">
      <input
        type="text"
        name="email"
        placeholder="Email as login"
        value={this.state.email}
        onChange={this.handleSignupChange}
        />
      <input
      type="password"
        name="password"
        placeholder="Password"
        value={this.state.password}
        onChange={this.handleSignupChange}
        />
        <input 
        type="password"
        name="password_confirmation"
        placeholder="Confirm Password"
        value={this.state.password_confirmation}
        onChange={this.handleSignupChange}
        />
      <input
      type="text"
        name="first_name"
        placeholder="First Name"
        value={this.state.first_name}
        onChange={this.handleSignupChange}
        />
      <input
      type="text"
        name="last_name"
        placeholder="Last Name"
        value={this.state.last_name}
        onChange={this.handleSignupChange}
        />
      </div>
      <div className="sign-form-right">
      <input
      type="text"
        name="street_address"
        placeholder="Street Address"
        value={this.state.street_address }
        onChange={this.handleSignupChange}
        />
      <input 
type="text"
        name="city"
        placeholder="City "
        value={this.state.city }
        onChange={this.handleSignupChange}
        />
      <input  // this should become a prepopulate dropdown
      type="text"
        name="state"
        placeholder="State"
        value={this.state.state }
        onChange={this.handleSignupChange}
        />
      <input  // this should become a prepopulate dropdown
      type="text"
        name="zip_code"
        placeholder="Zipcode "
        value={this.state.state.zip_code }
        onChange={this.handleSignupChange}
        />
      <input  // this should become a prepopulate dropdown
      type="number"
        name="phone"
        placeholder="Phone Number "
        value={this.state.phone }
        onChange={this.handleSignupChange}
        />
      {/* <input type="submit" placeholder="Create Your Account"/> */}
      <button className="signupButton">Create Your Account</button>
      </div>
    </form>
</div> // end container

    ) // end return
  } // end render
} // end class 

const mapDispatchToProps = dispatch => ( 
  {
    signupPostFetch: userStateInfo => dispatch(signupPostFetch(userStateInfo))
  }
)

export default connect(null, mapDispatchToProps)(Signup)





