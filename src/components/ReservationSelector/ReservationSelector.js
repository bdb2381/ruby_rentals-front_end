import React from 'react'
import {connect} from 'react-redux'
import {addItemToCart} from '../../redux/actions'


class ReservationSelector extends React.Component {
 state = {
  startDate: "2020-01-01",
  endDate: "2020-02-02"
 }
//  2020-10-07




  handleChange(event) {
    event.preventDefault()
    
    let name = event.target.name
    let value = event.target.value
    
    console.log(name)
    console.log( value)

    this.setState((prevState) => (
      {
        ...prevState,
        [name]: value,
      }
    ))
  }
  

  handleSubmit = (event)=>{
    event.preventDefault()

   this.props.addItemToCart(
     {
     ...this.props.item, 
    startDate: this.state.startDate,
    endDate: this.state.endDate
    }
    );
  }
  
  

// create dropdown options based on inventory amount 
   inventoryAvailable (){
    const {inventory} = this.props.item 
    const {item} = this.props
    let cost = item.day_rental_price
    
    let numbers = inventory.map((item, i) => {
      return(
        <option id={item.id} name={++i} value={i * cost}>{i}</option>
      )
    })
    return numbers
   }
    
  
  render(){
    return(
    <div className="reservation-container">

    
    <form onSubmit={this.handleSubmit}>
    {/* onClick={() => this.handleClick(this.props.item)}  */}
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
          type="date" 
          name="returnDate" 
          value={this.props.returnDate}/>
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

