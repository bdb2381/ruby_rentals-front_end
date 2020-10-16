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

  
        console.log("log out from NavBar")
     

    }

   
    render(){
        
    return(
        <nav className="navbar">
            
                <div>
                    <Link to="/" className="brand-wordmark">
                        Ruby Rentals
                    </Link>
                </div>

                <div >
                    <Link to="/"
                    className="navbar__link">
                        Home
                    </Link>
                    
                    <Link to="/gear" className="navbar__link">
                        Gear
                    </Link> 
                    
                    {!localStorage.token || !this.props.currentUser ? (
                    <div>
                        <Link to="/signup"
                        className="navbar__link">
                            Create Account
                        </Link>

                        <Link to="/login"
                        className="navbar__link">
                            Log In
                        </Link> 
                    </div>
                    ) : (
                    <div>
                        <Link to="/cart"
                        className="navbar__link">
                            Cart
                        </Link>         
                        
                        <Link to="/" 
                        className="navbar__link"
                        onClick={() => this.onLogoutClick()} >
                            Logout 
                        </Link>

                    </div> 
                    )}
                     
                </div>
          
        </nav>  
    )}
}

  
const mapStateToProps = (state) => {
    return {currentUser: state.login.currentUser }
}

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
