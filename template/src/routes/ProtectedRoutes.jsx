import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import { isLoggedIn } from '../services/Auth'


export default function ProtectedRoutes() {
  
  if (isLoggedIn()) {
    return <>
      <Header />
      <Outlet />
    </>
  }
  return <Navigate to="/login" replace={true} />
}


// export default function ProtectedRoutes () {
//   // <Navigate to="/login" replace={true} /> 
//   const path = ['/login', '/register'].includes(window.location.pathname)
//   if (false) {
//     return <Navigate to="/login" replace={true} />
//   }
//   else if (false) {
//     return <Navigate to="/" replace={true} />
//   }
//   else {
//     return <Outlet />
//   }
// }

