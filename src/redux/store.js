import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { authSlice, cartSlice, dataSlice, modalSlice } from './features'

const store = configureStore({
  reducer: {
    auth: authSlice,
    data: dataSlice,
    modal: modalSlice,
    cart: cartSlice,
  },
})

const useAuthState = () => useSelector((store) => store.auth)
const useDataState = () => useSelector((store) => store.data)
const useModalState = () => useSelector((store) => store.modal)
const useCartState = () => useSelector((store) => store.cart)

export { useAuthState, useDataState, useModalState, useCartState }
export default store
