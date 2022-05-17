import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthProvider'

const PrivateRoute = () => {
  const { isLoggedIn } = useAuthContext()

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
