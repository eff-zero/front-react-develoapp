import { Container, Button } from 'react-bootstrap'
import { Product } from '..'

const Category = ({ category }) => {
  const { products } = category
  const activeProducts = products.filter((product) => product.state === 1)

  console.log(category)
  return (
    <Container className='mb-3 p-3 border shadow-sm'>
      <h4 className='mb-4 text-uppercase border-bottom'>
        categoria: <span className='text-muted'> {category.name} </span>{' '}
      </h4>

      <Container className='d-flex justify-content-evenly'>
        {activeProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Container>
    </Container>
  )
}
export default Category
