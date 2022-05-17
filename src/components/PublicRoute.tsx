import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthProvider'

const PublicRoute = () => {
  const { isLoggedIn } = useAuthContext()

  return isLoggedIn ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoute
