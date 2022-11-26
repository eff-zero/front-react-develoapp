import logoJs from '@/assets/logo-js.png'
import { useGetRole } from '@/helpers'
import { addToCart } from '@/redux/features/cart/cartSlice'
import { openProductModal } from '@/redux/features/product/productSlice'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const Product = ({ product }) => {
  const dispatch = useDispatch()

  const rol = useGetRole() // hook para obtener rol
  const isAdmin = rol === 1 // 1: admin, 2: clientI

  let { name, description, price } = product
  description = description.split('|')

  const handleEditProduct = () => {
    dispatch(openProductModal({ title: `Editando producto`, info: product }))
  }

  return (
    <Card>
      <Card.Img src={logoJs} variant='top' style={{ height: '10rem', objectFit: 'fill' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Caracteristicas description={description} />
        <Card.Text>
          <span className='text-success'> $ {price.toLocaleString()} </span>
        </Card.Text>
        <div className='d-flex justify-content-between gap-2'>
          <Button
            variant='primary'
            size='sm'
            onClick={() => dispatch(addToCart(product))}
          >
            Añadir al carrito
          </Button>
          {isAdmin && (
            <Button variant='warning' size='sm' onClick={handleEditProduct}>
              Editar
            </Button>
          )}
        </div>
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
