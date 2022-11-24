import { RoutesWithNotFound } from '@/helpers'

import { Route } from 'react-router-dom'
import { RoutesWithNotFound } from '@/helpers'
import { HomePage, LoginPage } from '@/pages'
import { PrivateRoutes, PublicRoutes } from '@/guards'
import { LOGIN } from '@/routes'

const App = () => {
  return (
    <RoutesWithNotFound>
      <Route index element={<HomePage />} />

      <Route element={<PublicRoutes />}>
        <Route path={LOGIN} element={<LoginPage />} />
      </Route>

      <Route element={<PrivateRoutes />}></Route>
    </RoutesWithNotFound>
  )
}


export default App
