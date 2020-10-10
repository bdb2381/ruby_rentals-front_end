import React, { useState } from 'react'
import {connect} from 'react-redux'


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const ReservationSelector = () => {
   const [startDate, setStartDate] = useState(new Date());
  
   const [endDate, setEndDate] = useState(new Date());
  

  console.log(startDate)

  return(
    <div>

    <div className="datePicker"> 
    Pickup Date
      <DatePicker 
      selected={startDate} 
      onChange={date => setStartDate(date)} />
    </div>
    <div className="datePicker">
      Return Date
      <DatePicker 
      selected={endDate} 
      onChange={date => setEndDate(date)} />
    </div>

    </div>


  ) // end return
} // end reservationSelector
// export default connect(mapStateToProps, mapStateToProps)(ReservationSelector)

export default ReservationSelector

// const mapStateToProps = (state) => {}

// const mapDispatchToProps = (dispatch) => {}