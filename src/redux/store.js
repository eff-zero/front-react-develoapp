import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { authSlice } from './features'

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})

const useAuthState = () => useSelector((store) => store.auth)

export { useAuthState }
export default store
