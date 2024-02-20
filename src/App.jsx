import React from 'react'
import './App.css'
import Login from './components/Login/Login'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Detail from './components/detail/Detail'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/detail/:id' element={<Detail />} />
      </Routes>

    </div>
  )
}

export default App
