import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Route, Routes } from 'react-router'
import HomeComponent from './Home'
import AboutComponent from './About'
import ContactUsComponent from './ContactUs'
import Navbar from './Navbar'
// import './App.css'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/about" element={<AboutComponent/>}></Route>
        <Route path="/contactus" element={<ContactUsComponent />}></Route>
      </Routes>
    </>
  )
}

export default App
