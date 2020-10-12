import React from 'react'
import ReservationSelector from '../components/ReservationSelector/ReservationSelector.js'

// import {connect} from 'react-redux'

const ReservationContainer = () => {





  return(
    <div>
      <h1>Reserve Your Gear </h1>
      <ReservationSelector/>

      </div> // end container div
    ) // end return 
} // end ReservationSelector





// const mapDispatchToProps = (dispatch ) => {
//   return {getItems: () => dispatch(getItems())}
// }

// const mapStateToProps = (state) => {
//   // console.log(state)
//   return {allItems: state.itemsReducer.allItems }

// }

export default ReservationContainer