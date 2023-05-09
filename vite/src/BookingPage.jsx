import React from 'react'

export default function BookingPage() {
  return (
    <div className='booking-page'>
      <div className='booking-page-top-text'>
        <h2>Reservations</h2>
        <p>Please choose your date and time and enter your contact details</p>
      </div>

      <div className="booking-input-section">
        <div className="contact-detail-input">
          <input type="text" name="name" id="name" placeholder='Enter Name'/>
          <input type='text' name='email' id='email' placeholder='Enter Email'/>

        </div>
        <div className='date-input-area'>
          <input type="date" name="date" id="date" />
          <input type="time" name="time" id="time" step="1800" />
        </div>
      </div>

      <p>We will contact you soon regarding your booking</p>

    </div>
  )
}
