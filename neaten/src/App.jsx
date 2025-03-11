import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

export const App = () => {
  return (
 <>
  <Navbar></Navbar>
 <Router>
 <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
 </Router>
  <Footer></Footer>
 
 </>
  )
}

export default App