import React, { useState } from 'react'
import {connect} from 'react-redux'



class ReservationSelector extends React.Component {
 
  
  handleChange(event) {
    console.log(event)
    // let name = event.target.name
    // let value = event.target.value

    // this.setState((prevState) => ({
    //   item: {
    //     ...prevState.item,
    //     [name]: value,
    //   },
    // }));
  }
  
  handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }

  // item.id === props.id
  
  // filterItems = (this.props) => {
  //   console.log(this.props)
  //   let item = this.props.allItems.filter( item => console.log(item.id) )
  //   return item
  // }
  

  
  
  render(){
    console.log(this.props)
  return(
    <div className="reservation-container">


{/* {this.filterItems()} */}



    
    <form onSubmit={this.handleSubmit}>

      <div className="datePicker"> 
        Pickup Date
        <input 
          type="date" name="startDate" value="startDate"/>
      </div>

      <div className="datePicker">
        Return Date
        <input 
          type="date" name="returnDate" value="returnDate"/>
      </div>

      <div className="reservationDropdown">
          <label>
            Pick your favorite flavor:
            {/* <select value={value} onChange={hhandleChange}> */}
            <select onChange={this.handleChange}>
              <option name="grapefruit" value="grapefruit">Grapefruit</option>
              <option name="" value="lime">Lime</option>
              <option name="" value="coconut">Coconut</option>
              <option name="" value="mango">Mango</option>
            </select>
          </label>
      </div>
      <div>
        <input type="submit" name="submit" value="Submit Reservation" id="submit" />
      </div>
    
    </form>

    </div> // end wrapper div 


  ) // end return
} // end ReservationSelector
}



const mapStateToProps = (state) => {
  console.log(state)
  return {item: state.item }
}

export default connect(mapStateToProps,
  // mapDispatchToProps
  )( ReservationSelector)