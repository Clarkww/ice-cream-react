import { useState } from 'react'

import './styles.css'


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'




import Header from './componets/Header'

import Footer from './componets/Footer'


// importing the pages 

import HomePage from './HomePage'

import MenuPage from './MenuPage'

import BookingPage from './BookingPage'

import ContactPage from './ContactPage'




function App() {

  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/booking' element={<BookingPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </main>


      <Footer />
    </Router>
  )
}

export default App
