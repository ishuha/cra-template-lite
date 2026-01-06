import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import About from '../pages/About'
import ProtectedRoutes from './ProtectedRoutes'
import CounterPage from '../pages/Counter'
import ApiExample from '../pages/ApiExample'
import NotFound from '../pages/NotFound'

export default function RouteMap() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/api-example' element={<ApiExample />} />
      </Route>

      <Route path='/404' element={<NotFound />} />
      <Route path='*' element={<Navigate to="/404" replace />} />
    </Routes>
  )
}