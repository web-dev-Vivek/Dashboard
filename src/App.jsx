import { useState } from 'react'
import './App.css'
import img from './assets/bg2.jpg'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
       <div className="" style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
       }}>
        <Navbar />
       </div>
    </>
  )
}

export default App
