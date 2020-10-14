import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../redux/actions'


class Navbar extends React.Component {
 
 onLogoutClick (){
    
    // Remove the token and user data from localStorage
    localStorage.clear()

    // Remove the user object from the Redux store
    this.props.logoutUser()

    // need to implement version of login redirect 
    // this.props.history.push("/") 


    }
    
    render(){
    return(
        <nav className="nav-wrapper">
            
                <div>
                    <Link to="/" className="brand-wordmark">Ruby Rentals</Link>
                </div>
                
                    <Link to="/">Home</Link>
                    <Link to="/gear">Gear</Link> 
                    
                    {!localStorage.token ? (
                    <div>
                        <Link to="/signup">Create Account</Link>
                        <Link to="/login">Login</Link> 
                    </div>
                    ) : (
                    <div>
                        <Link to="/cart">Cart</Link>         
                        <Link to="/" 
                        onClick={() => this.onLogoutClick()} 
                        >Logout </Link>

                    </div> 
                    )}
                     
              
          
        </nav>  
    )}
}

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
  })
  
export default connect(null, mapDispatchToProps)(Navbar);
