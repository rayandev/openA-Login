import React from 'react'
import Login from './components/Login&Register/Login'
import Register from './components/Login&Register/Register'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Forgot from './components/Login&Register/Forgot'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/" element={<Navigate to="/login"/>}/>
      </Routes>
    </div>
  )
}

export default App