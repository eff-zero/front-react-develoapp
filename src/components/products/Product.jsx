import logoJs from '@/assets/logo-js.png'
import { Card, Button } from 'react-bootstrap'

const Product = ({ product }) => {
  let { name, description, price, stock } = product
  description = description.split('|')

  return (
    <Card>
      <Card.Img src={logoJs} variant='left' style={{ height: '15rem' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         <p className='mb-0 fw-mediium'>  Caracteristicas:  </p>
          <ul>
            {description.map((el) => (
              <li className='text-secondary'> {el} </li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text>
          <span className='text-success'> $ {price.toLocaleString()} </span>
        </Card.Text>
        <Button variant='primary'>Añadir al carrito</Button>
      </Card.Body>
    </Card>
  )
}
export default Product
