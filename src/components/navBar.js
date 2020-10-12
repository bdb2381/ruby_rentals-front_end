import React from 'react';
import { Link } from 'react-router-dom'

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div >
                    <Link to="/" className="brand-wordmark">Ruby Rentals</Link>
                    
                    <ul className="right">
                        <Link to="/">Home</Link>
                        <Link to="/gear">Gear</Link> 
                        <Link to="/cart">Cart</Link>
                        {/* <Link to="/cart"><i className="material-icons">shopping_cart</i></Link> */}
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;