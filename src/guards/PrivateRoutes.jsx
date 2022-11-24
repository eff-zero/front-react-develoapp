import { useAuthState } from '@/redux/store'
import { LOGIN } from '@/routes'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const { isAuth } = useAuthState()
  return isAuth ? <Outlet /> : <Navigate to={LOGIN} />
}

export default PrivateRoutes
