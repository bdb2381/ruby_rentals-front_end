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
            
                <div className="brand-wordmark">
                    <Link to="/" >
                        Ruby Rentals
                    </Link>
                </div>
                
                <div className="navbar__link">
                    <Link to="/"
                    >
                        Home
                    </Link>
                </div> 
                <div className="navbar__link">   
                    <Link to="/gear" >
                        Gear
                    </Link> 
                </div>
                    {!localStorage.token || !this.props.currentUser ? (
                    <> 
                    <div className="navbar__link">
                        <Link to="/signup"
                        >
                            Create Account
                        </Link>
                    </div> 
                    <div className="navbar__link">
                        <Link to="/login"
                        >
                            Log In
                        </Link> 
                    </div>
                    </>
                    ) : (
                    <>
                        <div className="navbar__link">
                            <Link to="/cart"
                           >
                                Cart
                            </Link>         
                        </div>
                        <div  className="navbar__link">
                            <Link to="/" 
                            
                            onClick={() => this.onLogoutClick()} >
                                Logout 
                            </Link>
                        </div>   
                    </> 
                    )}
                     
                
          
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
