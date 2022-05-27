import { State } from '@src/store'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  const { isLoggedIn } = useSelector((state: State) => state.auth)

  return isLoggedIn ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoute
