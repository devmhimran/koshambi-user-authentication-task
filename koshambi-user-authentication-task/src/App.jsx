import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/Login/Login'
import Registration from './Component/Registration/Registration'

function App() {


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
