import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  showModal: false,
}

const findInCart = (cart, id) => cart.find((el) => el.id === id)

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    openCart: (state) => {
      state.showModal = true
    },
    closeCart: (state) => {
      state.showModal = false
    },
    addToCart: (state, action) => {
      const payload = action.payload
      const cart = state.cart
      const productInCart = findInCart(cart, payload.id)
      productInCart
        ? (productInCart.quantity = +1)
        : cart.push({ ...payload, quantity: 1 })
    },
    removeFromCart: (state, action) => {
      const payload = action.payload
      const cart = state.cart
      const productInCart = findInCart(cart, payload.id)
      const indexInCart = cart.indexOf(productInCart)
      cart.splice(indexInCart, 1)
    },
    addOne: (state, action) => {
      const payload = action.payload
      const cart = state.cart
      const productInCart = findInCart(cart, payload.id)
      productInCart.quantity += 1
    },
    removeOne: (state, action) => {
      const payload = action.payload
      const cart = state.cart
      const productInCart = findInCart(cart, payload.id)
      const indexInCart = cart.indexOf(productInCart)
      productInCart.quantity === 1
        ? cart.splice(indexInCart, 1)
        : (productInCart.quantity -= 1)
    },
    clearCart: () => initialState,
  },
})

export const {
  openCart,
  closeCart,
  addToCart,
  removeFromCart,
  addOne,
  removeOne,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
