import { clearCart, closeCart } from '@/redux/features/cart/cartSlice'
import { useCartState } from '@/redux/store'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { CartItem, CustomModal } from '..'

const title = 'carrito de compras'

const getTotal = (cart) =>
  cart.reduce((acc, el) => ((acc += el.price * el.quantity), acc), 0)

const Cart = () => {
  const { cart, showModal } = useCartState()
  const cartIsEmpty = cart.length === 0

  const dispatch = useDispatch()
  const handleClose = () => dispatch(closeCart())

  return (
    <CustomModal handleClose={handleClose} show={showModal} title={title}>
      {cart.map((data) => (
        <CartItem key={data.id} data={data} />
      ))}
      <div className='d-flex flex-column mt-3'>
        {cartIsEmpty && <>Carrito vacio</>}
        {!cartIsEmpty && (
          <div className='d-flex justify-content-between fw-bold border-top border-bottom border-5 px-2 fs-3'>
            <span>TOTAL</span>
            <span className='ms-auto'>
              {'$ ' + getTotal(cart).toLocaleString()}
            </span>
          </div>
        )}

        {!cartIsEmpty && (
          <div className='d-flex justify-content-between mt-2 p-2'>
            <Button variant='success' onClick={() => alert('no implementado')}>Comprar</Button>
            <Button variant='warning' onClick={() => dispatch(clearCart())}>
              Limpiar
            </Button>
          </div>
        )}
      </div>
    </CustomModal>
  )
}
export default Cart
