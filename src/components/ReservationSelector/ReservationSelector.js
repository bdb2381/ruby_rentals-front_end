import React, { useState } from 'react'
import {connect} from 'react-redux'



class ReservationSelector extends React.Component {
 
  
  handleChange(event) {
    console.log(event)
    // this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    console.log(event)
    event.preventDefault();
  }

render(){
  return(
    <div className="reservation-container">
    {/* <form onSubmit={this.handleSubmit()}> */}
    <form >

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
            {/* <select value={this.state.value} onChange={this.handleChange}> */}
            <select >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
      </div>
      <div>
        <input type="submit" name="submit" value="Submit Reservation" id="submit"  />
      </div>
    
    </form>

    </div> // end wrapper div 


  ) // end return
} // end ReservationSelector
}
// export default connect(mapStateToProps, mapStateToProps)(ReservationSelector)

export default ReservationSelector

// const mapStateToProps = (state) => {}

// const mapDispatchToProps = (dispatch) => {}