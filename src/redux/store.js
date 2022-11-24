import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { authSlice, dataSlice, modalSlice } from './features'

const store = configureStore({
  reducer: {
    auth: authSlice,
    data: dataSlice,
    modal: modalSlice,
  },
})

const useAuthState = () => useSelector((store) => store.auth)
const useDataState = () => useSelector((store) => store.data)
const useModalState = () => useSelector((store) => store.modal)

export { useAuthState, useDataState, useModalState }
export default store
