import React, { useState } from 'react'

// import link from react-router-dom
import { Link } from 'react-router-dom'

import logo from '../assets/img/logo.png'

import { FaHamburger } from 'react-icons/fa'

export default function () {
  let [navOpen, setNavOpen] = useState(false)

  let toggleNav = () => {
    setNavOpen(!navOpen)
    // add open class to ul
    let ul = document.querySelector('ul')
    ul.classList.toggle('nav-open')

  }

  let clickNavItem = () => {
    setNavOpen(false)
    // add open class to ul
    let ul = document.querySelector('ul')
    ul.classList.remove('nav-open')

  }


  return (
    <header>
        <nav>
            <div className="nav-top-row">
              <div className='hamburger' onClick={toggleNav}><FaHamburger /> </div>
              <Link to='/' className='head-img'><img src={logo} alt="" className='header-img' /></Link>
              
            </div>

            <ul>
                <li>
                    <Link onClick={clickNavItem} to='/menu'>Menu</Link>
                    <Link onClick={clickNavItem} to='/booking'>Book A Table</Link>
                    <Link onClick={clickNavItem} to='/contact'>Contact Us</Link>
                    {/* <Link to='/'>Delivery</Link> */}


                </li>
            </ul>

        </nav>
    </header>
  )
}
