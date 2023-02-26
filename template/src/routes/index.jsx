import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../pages/Home'
import Login from '../pages/Auth/Login'
import ProtectedRoutes from './ProtectedRoutes'

export default function RouteMap() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>

      <Route path='/' element={<ProtectedRoutes/> }>
        <Route path='/' element={<Home/>}/> 
        <Route exact path='head' element={<Header/>}/>
      </Route>
  </Routes>)
}