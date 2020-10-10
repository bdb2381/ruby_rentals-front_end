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

  
  
  filterItems = () =>{

    return console.log(this.props.allItems)
  }
  

  
  
  render(){
    // console.log(this.props.allItems)
  return(
    <div className="reservation-container">


{this.filterItems()}



    
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
// export default connect(mapStateToProps, mapStateToProps)(ReservationSelector)


const mapStateToProps = (state) => {
  // console.log(state)
  return {allItems: state.itemsReducer.allItems }
  
}
export default connect(mapStateToProps)( ReservationSelector)
// const mapDispatchToProps = (dispatch) => {}