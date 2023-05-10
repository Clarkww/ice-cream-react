import React, { useState } from 'react'

import cakeImg from '../assets/img/cakes.jpg'

import cakeImg2 from '../assets/img/morecakes.jpg'

import store from '../assets/img/store.avif'


// import cheeseCakeImg from '../assets/img/cheese-cake.jpg'
// import iceCreamImg from '../assets/img/ice-cream-01.jpg'

let images = [cakeImg, cakeImg2, store]

// import AiOutlineRight from react-icons/ai

import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'





export default function Slides() {

    let [currentImg, setCurrentImg] = useState(0)

    let nextImg = () => {
        if (currentImg === images.length - 1) {
            setCurrentImg(0)
        } else {
            setCurrentImg(currentImg + 1)  // currentImg = currentImg + 1
        }
    }

    let prevImg = () => {
        if (currentImg === 0) {
            setCurrentImg(images.length - 1)
        } else {
            setCurrentImg(currentImg - 1)
        }
    }



  return (
    <div className="slide-container">
        <img src={images[currentImg]} alt="" className='slide-show-img active-slide'/>
        <AiOutlineLeft onClick={prevImg} className='left-arrow arrows'/>
        <AiOutlineRight onClick={nextImg} className='right-arrow arrows'/>
        {/* dots to show active */}
        <div className="dots-container">
            {images.map((img, index) => {
                return (
                    <div className={`dot ${index === currentImg ? 'active-dot' : ''}`}></div>
                )
            })}

            </div>

    </div>


  )
}
