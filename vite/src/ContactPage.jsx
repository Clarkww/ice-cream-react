import React from 'react'

export default function ContactPage() {
  return (
    <div className='contact-page'>
        <h2>Find Us</h2>

        <div className="map-outer">    
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20048.876196702648!2d1.1074343108398466!3d51.0879862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47debeda25fd37c1%3A0x726e6b636a9a57bf!2sMoos%20Direct!5e0!3m2!1sen!2suk!4v1683581093278!5m2!1sen!2suk" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='contact-us-info'>
            <div>
                <p>Our Addreess:</p>
                <p>Missy Moo's</p>
                <p>1 Street</p>
                <p>Folkesone</p>
                <p>CT20 1SE</p>
            </div>

            <div className="ways-to-contact">
                <p>Ways to contact us:</p>
                <p>Phone: 01303 123456</p>
                <p>Email:
                    <a href="mailto:cakes@cake.cake">cakes@cake.cake</a>
                </p>





            </div>
        </div>



    </div>
  )
}
