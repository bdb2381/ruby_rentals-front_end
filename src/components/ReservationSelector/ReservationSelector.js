import React from 'react'
import {connect} from 'react-redux'
import {addItemToCart} from '../../redux/actions'

//////////////
// handle logic (dates, amounts) for reservations 
//////////////

class ReservationSelector extends React.Component {
  state = {
    // local state for reservation form
    startDate: "2020-01-01",
    returnDate: "2020-02-02",
    numberOfItemsReserved: 0
  }

  
  handleChange(event) { // handle change for calender input
      event.preventDefault()
      
      let name = event.target.name
      let value = event.target.value

      this.setState((prevState) => (
        {
          ...prevState,
          [name]: value,
        }
      ))
    }

  handleDropdownChange(event) { // handle for dropdown. Required since <select> doesn't have a name type

    event.preventDefault()
    
    let value = event.target.value

    this.setState((prevState) => (
        {
          ...prevState,
          numberOfItemsReserved: value,
        }
      )
    )
  }
  

  handleSubmit = (event)=>{   // add startDate & endDate to the item Object

    event.preventDefault()
    const {item} = this.props

    this.props.addItemToCart(
      {
        ...this.props.item, 
        startDate: this.state.startDate,
        returnDate: this.state.returnDate,
        numberOfItemsReserved: this.state.numberOfItemsReserved,
        total_rental_amount: this.state.numberOfItemsReserved * item.day_rental_price
      }
    );
  }

  // create dropdown options based on inventory amount
  // REFACTOR: count based on availability 
  inventoryAvailable (){
    const {inventory} = this.props.item 
      
    let numbers = inventory.map((item, i) => {
        return(
          <option 
          key={i++} 
          value={i}
          > {i} </option>
        )
      }
    )
    return numbers
  }
  
  render(){
    // nested ternary statements. Display based on login status and cart status

    return(
    <div className="reservation-container">
      {!localStorage.token ? ( "Login to reserve equipment") 
     :(
      <form onSubmit={this.handleSubmit}>
        <div className="datePicker"> 
          Pickup Date
          <input 
            onChange={(event) => this.handleChange(event)}
            type="date" 
            name="startDate" 
            value={this.props.startDate}/>
        </div>

        <div className="datePicker">
          Return Date
          <input 
            onChange={(event) => this.handleChange(event)}
            type="date" 
            name="returnDate" 
            value={this.props.returnDate}/>
        </div>

        <div className="reservationDropdown">
            <label>
              Pick how many {this.props.item.model}:  </label>
            
            <select onChange={(event) => this.handleDropdownChange(event)}>
              {this.inventoryAvailable()}
            </select>
            <p>
              There are {this.props.item.inventory.length} available. 
          </p>
      </div>
    
      <div className="reservation-button">
        <input type="submit" name="submit" value="Add To Cart" id="submit" />
      </div>
    </form>
    )}
    </div> // end wrapper div 
    
    ) // end return
  } // end ReservationSelector
}

const mapStateToProps = (state) => {
  return {
    item: state.currentItem.item, // item current on display
    cartItems: state.cartItems, // items added to/in cart
    startDate: state.startDate,
    endDate: state.endDate
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    addItemToCart: (item) => {
      dispatch(addItemToCart(item))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationSelector)


