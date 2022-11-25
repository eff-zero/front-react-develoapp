import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  showModal: false,
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    openCart: (state) => ({ ...state, showModal: true }),
    closeCart: (state) => ({ ...state, showModal: false }),
  },
})

export const { openCart, closeCart } = cartSlice.actions
export default cartSlice.reducer
