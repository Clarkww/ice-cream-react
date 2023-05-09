import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function () {
  return (
    <footer>
        <a href="">Back To Top</a>
        <div className='subscribe-section'>
            <h4>Subscribe to our mailing list</h4>
            <input type="text" placeholder='E-Mail' />
        </div>

        <div className="social-media-links">
            <a href=""><FaFacebook /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaTwitter /></a>

        </div>
    </footer>
  )
}
