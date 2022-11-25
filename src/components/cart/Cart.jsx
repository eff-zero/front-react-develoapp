import { closeCart } from '@/redux/features/cart/cartSlice'
import { useCartState } from '@/redux/store'
import { useState } from 'react'
import { NavDropdown, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { CustomModal } from '..'

const title = 'carrito de compras'

const Cart = () => {
  const { cart, showModal } = useCartState()
  const dispatch = useDispatch()

  const handleClose = () => dispatch(closeCart())

  return (
    <CustomModal
      handleClose={handleClose}
      show={showModal}
      title={title}
    ></CustomModal>
  )
}
export default Cart
