import React from 'react'
import {connect} from 'react-redux'
import {addItemToCart} from '../../redux/actions'


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

  handleClick = (id)=>{
   this.props.addItemToCart(id);
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

      <div className="datePicker"> 
        Pickup Date
        <input 
          type="date" 
          name="startDate" 
          value="startDate"/>
      </div>

      <div className="datePicker">
        Return Date
        <input 
          type="date" 
          name="returnDate" 
          value="returnDate"/>
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
        <input type="submit" name="submit" value="Add To Cart" id="submit" onClick={() => this.handleClick(this.props.item.id)} />
      </div>
    
    </form>

    </div> // end wrapper div 


  ) // end return
} // end ReservationSelector
}



const mapStateToProps = (state) => {
  return {
    item: state.currentItemReducer.item,
    cartItems: state.cartItems
    // itemsInCart: state.cartReducer.itemsInCart 
  }
}

const mapDispatchToProps= (dispatch)=>{
 
  return {
    addItemToCart: (id) => {
      console.log(id)
      dispatch(addItemToCart(id))}
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

