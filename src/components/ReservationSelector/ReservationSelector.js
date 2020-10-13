import React from 'react'
import {connect} from 'react-redux'
import {addItemToCart} from '../../redux/actions'


class ReservationSelector extends React.Component {
 state = {
   // local state for reservation form
  startDate: "2020-01-01",
  returnDate: "2020-02-02",
  numberOfItemsReserved: 0
 }


 // handle change for calender input
handleChange(event) {
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

// handle change for dropdown. Required since <select> doesn't have a name
  handleDropdownChange(event) {
    event.preventDefault()
    
    let value = event.target.value

    this.setState((prevState) => (
      {
        ...prevState,
        numberOfItemsReserved: value,
      }
    ))
  }
  

  // add startDate & endDate to the item Object
  handleSubmit = (event)=>{
    event.preventDefault()

   this.props.addItemToCart(
     {
     ...this.props.item, 
    startDate: this.state.startDate,
    returnDate: this.state.returnDate,
    numberOfItemsReserved: this.state.numberOfItemsReserved

    }
    );
  }
  
  

// create dropdown options based on inventory amount 
   inventoryAvailable (){
    const {inventory} = this.props.item 
    const {item} = this.props
    let cost = item.day_rental_price
    let id = item.id
  
    let numbers = inventory.map((item, i) => {
      return(
        <option 
        key={id} 
        value={i}
        > {i} </option>
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
            How many {this.props.item.model}:
            <select onChange={(event) => this.handleDropdownChange(event)}>
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
  return {
    item: state.currentItemReducer.item,      // the item current on display
    cartItems: state.cartItems,                // for items added to cart
    startDate: state.startDate,
    endDate: state.endDate
    // itemsInCart: state.cartReducer.itemsInCart 
  }
}

const mapDispatchToProps= (dispatch)=>{
 
  return {
    addItemToCart: (item) => {
      console.log(item)
      dispatch(addItemToCart(item))}
  }
}


  export default connect(mapStateToProps, mapDispatchToProps)(ReservationSelector)

// onst initialState = {
//   itemsInCart: {
//     items: [{
//       startDate: null,
//       endDate: null,
//       inventory: null,
//       amount: 0
//     }]
//   },
//   totalNumberOfItems: 0
// }

