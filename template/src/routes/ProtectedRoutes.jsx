import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Layout from '../components/common/Layout'
import { isLoggedIn } from '../services/Auth'

export default function ProtectedRoutes() {
  if (isLoggedIn()) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    )
  }
  return <Navigate to="/login" replace={true} />
}
