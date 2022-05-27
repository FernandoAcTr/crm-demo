import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '@src/store'

const PrivateRoute = () => {
  const { isLoggedIn } = useSelector((state: State) => state.auth)

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
