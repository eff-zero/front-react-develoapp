import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { authSlice } from './features'

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})

const useAuthSlice = () => useSelector((store) => store.auth)

export { useAuthSlice }
export default store
