import React from 'react'

import img1 from '../assets/img/cakes.jpg'


export default function () {
  return (
    <section>
        <div className="info-container">
            <div className="info">
                <h3>Moo's Direct</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <img src={img1} className='info-img' alt="" />
            </div>

            <div className="info">
                <h3>Our Story</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <img src={img1} className='info-img' alt="" />
            </div>

            <div className="info">
                <h3>Our Mission</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <img src={img1} className='info-img' alt="" />
            </div>

        </div>
    </section>
  )
}
