import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { authSlice, dataSlice } from './features'

const store = configureStore({
  reducer: {
    auth: authSlice,
    data: dataSlice,
  },
})

const useAuthState = () => useSelector((store) => store.auth)
const useDataState = () => useSelector((store) => store.data)

export { useAuthState, useDataState }
export default store
