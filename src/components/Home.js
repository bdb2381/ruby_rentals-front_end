
import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Home extends Component{
    render(){
        

        return(
            <div className="home-container">
                <div className="promo">
                    <h1>It is Fall.</h1>
                    <h2>Time To Camp Under The Stars</h2>

                <Link to="/gear/">
                    <input
                    type="submit" 
                    name="Find Your Adventure Gear" 
                    value="Find Your Adventure Gear" 
                    id="promo" 
                    />
                </Link>  
                </div>




               
            </div>
        )
    }
        
}    


export default Home 