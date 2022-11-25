import papelera from '@/assets/papelera-de-reciclaje.png'
import logoJs from '@/assets/logo-js.png'
import { Container, Button } from 'react-bootstrap'
import {
  removeFromCart,
  addOne,
  removeOne,
} from '@/redux/features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const styles = {
  container:
    'd-flex justify-content-between align-items-center border rounded shadow-sm my-2 p-2',
}

const CartItem = ({ data }) => {
  const dispatch = useDispatch()

  const { name, price, quantity } = data

  return (
    <Container className={styles.container}>
      <img src={logoJs} alt='' style={{ width: '5rem' }} />
      <div className='d-flex flex-column text-center'>
        <p className='fw-normal fs-5 m-0'>{name}</p>
        <div>
          <Button
            size='sm'
            variant='success'
            onClick={() => dispatch(addOne(data))}
          >
            +
          </Button>
          <span className='mx-2'>{quantity}</span>
          <Button
            size='sm'
            variant='danger'
            onClick={() => dispatch(removeOne(data))}
          >
            -
          </Button>
        </div>
        <p className='fw-normal text-danger mb-0 mt-2'>
          {'$ ' + (quantity * price).toLocaleString()}
        </p>
      </div>
      <img
        src={papelera}
        alt=''
        style={{ width: '3.5rem', cursor: 'pointer' }}
        onClick={() => dispatch(removeFromCart(data))}
      />
    </Container>
  )
}
export default CartItem
