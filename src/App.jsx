import { Route } from 'react-router-dom'
import { RoutesWithNotFound } from '@/helpers'
import { LoginPage } from '@/pages'
import { PrivateRoutes, PublicRoutes } from './guards'
import { LOGIN } from './routes'

const App = () => {
  return (
    <RoutesWithNotFound>
      <Route index element={<>HOLA</>} />

      <Route element={<PublicRoutes />}>
        <Route path={LOGIN} element={<LoginPage />} />
      </Route>

      <Route element={<PrivateRoutes />}></Route>
    </RoutesWithNotFound>
  )
}

export default App
