import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/Login/Login'
import Registration from './Component/Registration/Registration'
import ForgotPassword from './Component/ForgotPassword/ForgotPassword'
import RequireAuth from './Component/RequireAuth/RequireAuth'
import Profile from './Component/Profile/Profile'

function App() {


  return (
    <div className="container__main w-full h-screen flex items-center justify-center">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration" element={<ForgotPassword />} />
        <Route path="/profile" element={ <RequireAuth>
          <Profile/>
        </RequireAuth> } />
      </Routes>
    </div>
  )
}

export default App
