import React from 'react'
import {connect} from 'react-redux'
import {signupPostFetch} from '../redux/fetchActions'

class Signup extends React.Component {

  state = {
    email: "",
    password: "",
    first_name: "",,
    last_name: "",
    street_address: "", 
    city: "",
    state: "",
    zip_code: "",
    phone: "",
  }

  handleSignupChange = event => {
    this.setState = {
      [event.target.name]: event.target.value
    }
  }

handleSubmit = event => {
  event.preventDefault()
  this.props.signupPostFetch(this.state)
}

render(){
  return(

    <form onSubmit={this.handleSubmit()} onChange={this.handleSignupChange} >
      <input
        name="email "
        placeholder="What is your email? "
        value={this.state.email }
        // onChange={   }
        />
      <input
        name="password "
        placeholder="Password"
        value={this.state.password }
        // onChange={   }
        />
      <input
        name="first_name "
        placeholder="First Name "
        value={this.state.first_name }
        // onChange={   }
        />
      <input
        name="last_name"
        placeholder="Last Name "
        value={this.state.last_name }
        // onChange={   }
        />
      <input
        name="street_address "
        placeholder="Street Address "
        value={this.state.street_address }
        // onChange={   }
        />
      <input y
        name="city "
        placeholder="City "
        value={this.state.city }
        // onChange={   }
        />
      <input  // this should become a prepopulate dropdown
        name="state "
        placeholder="state "
        value={this.state.state }
        // onChange={   }
        />
      <input  // this should become a prepopulate dropdown
        name="zip_code "
        placeholder="Zipcode "
        value={this.state.state.zip_code }
        // onChange={   }
        />
      <input  // this should become a prepopulate dropdown
        name="phone "
        placeholder="Phone Number "
        value={this.state.phone }
        // onChange={   }
        />

      <input type="submit"/>

    </form>


    ) // end return
  } // end render
} // end class 

const mapDispatchToProps = dispatch => ( 
  {
    signupPostFetch: userStateInfo => dispatch(signupPostFetch(userStateInfo))
  }
)

export default connect(null, mapDispatchToProps)(Signup)





