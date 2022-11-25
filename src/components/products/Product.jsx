import logoJs from '@/assets/logo-js.png'
import { addToCart } from '@/redux/features/cart/cartSlice'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const Product = ({ product }) => {
  const dispatch = useDispatch()

  let { name, description, price } = product
  description = description.split('|')

  return (
    <Card>
      <Card.Img src={logoJs} variant='top' style={{ height: '15rem' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Caracteristicas description={description} />
        <Card.Text>
          <span className='text-success'> $ {price.toLocaleString()} </span>
        </Card.Text>
        <Button variant='primary' onClick={() => dispatch(addToCart(product))}>Añadir al carrito</Button>
      </Card.Body>
    </Card>
  )
}

const Caracteristicas = ({ description }) => {
  return (
    <div>
      <span className='d-block mb-0 fw-medium'> Caracteristicas: </span>
      <ul>
        {description.map((caracteristica, i) => (
          <li className='text-secondary' key={i}>
            {caracteristica}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Product
