import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginFetch} from '../redux/fetchActions.js'

class Login extends React.
Component {

  state = {
    email: "",
    password: "",
  };

  handleLoginChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value });
  };

   handleLoginSubmit = (event) => {
    event.preventDefault();
    
    console.log("before login fetch")
    
    this.props.loginFetch(this.state)
        // refactor to catch errors for failed login 

    this.props.history.push("/gear") 
    // upon successful login, redirect to homepage 

  };

  
  render() {
    return (
      // <div className="one-column-grid">
      <div>

          <h1> Ruby Rentals - All The Best Gear For Adventure.  </h1>
          <h2>Log in below:</h2>

        <form onSubmit={(e) => this.handleLoginSubmit(e)}>
          
          <div className="profile-form-row-center">
            <label name="email">Email</label>
            <input
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.handleLoginChange(e)}
            ></input>
          </div>

          <div className="profile-form-row-center">
            <label name="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.handleLoginChange(e)}
            ></input>
          </div>

          <button>Submit</button>
        </form>

        <div>
          <Link to="/signup"  className="signup-link">
            New? Create an account.
          </Link>
        </div>

      </div>
    );
  }
}

// initiate fetch get to login
const mapDispatchToProps = (dispatch ) => (
  {
  loginFetch: user => dispatch(loginFetch(user))
  }
)

export default connect(null, mapDispatchToProps)(withRouter(Login))