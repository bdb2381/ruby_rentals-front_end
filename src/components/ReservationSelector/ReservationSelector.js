import React from 'react'
import {connect} from 'react-redux'



// finish adding addToCar redux flow. Action of addItemToCart(item) is written plus reducer with itemsInCart state

// need to wire form to make it controlled
// need to work through reserve gear flow for add to cart, updating state, and updating database and using local state for the form




class ReservationSelector extends React.Component {
 
  handleChange(event) {
    // console.log(event)
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

  }

  
  

// create dropdown options based on inventory amount 
   inventoryAvailable (){
    const {inventory} = this.props.item 
 
    let numbers = inventory.map((item, i) => {
      return(
        <option name={++i} value={i}>{i}</option>
      )
    })
    return numbers
   }
    
  
  render(){
    return(
    <div className="reservation-container">

    
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
            {/* <select value={value} onChange={hhandleChange}> */}
            How many {this.props.item.model}:
            <select onChange={this.handleChange}>
              {this.inventoryAvailable()}
            </select>
          </label>
      </div>
      <div>
        <input type="submit" name="submit" value="Add To Cart" id="submit" />
      </div>
    
    </form>

    </div> // end wrapper div 


  ) // end return
} // end ReservationSelector
}



const mapStateToProps = (state) => {
  return {item: state.currentItemReducer.item }
}

export default connect(mapStateToProps)(ReservationSelector)