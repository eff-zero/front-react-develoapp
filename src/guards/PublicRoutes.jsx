import { useAuthState } from '@/redux/store'
import { HOME } from '@/routes'
import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes = () => {
  const { isAuth } = useAuthState()
  return !isAuth ? <Outlet /> : <Navigate to={HOME} />
}

export default PublicRoutes
