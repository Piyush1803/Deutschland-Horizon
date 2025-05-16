import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import SuccessPage from './pages/SuccessPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App