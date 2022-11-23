import { Routes, Route } from 'react-router-dom'

const RoutesWithNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path='*' element={<> 404 NOT FOUND </>} />
    </Routes>
  )
}
export default RoutesWithNotFound
