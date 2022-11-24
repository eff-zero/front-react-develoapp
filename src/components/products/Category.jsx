import { useGetRole } from '@/helpers'
import { openModal } from '@/redux/features/modal/modalSlice'
import { Container, Button, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { CategoryForm, CustomModal, Product } from '..'

const styles = {
  header_category:
    'd-flex justify-content-between align-items-start mb-3 border-bottom py-2',
}

const Category = ({ category }) => {
  const { products } = category
  const dispatch = useDispatch()

  const activeProducts = products.filter((product) => product.state === 1)

  const handleOpenModal = () =>
    dispatch(openModal(`Editar categoría: ${category.name}`))

  const rol = useGetRole()
  const isAdmin = rol === 1

  return (
    <>
      <Col>
        <Container className='mb-3 p-3 border shadow-sm'>
          <Container className={styles.header_category}>
            <div>
              <h4 className='text-uppercase'>
                categoria: <span className='text-muted'> {category.name} </span>{' '}
              </h4>
            </div>
            <div>
              {isAdmin && (
                <Button variant='dark' size='sm' onClick={handleOpenModal}>
                  Editar Categoria
                </Button>
              )}
            </div>
          </Container>

          <Container className='d-flex justify-content-evenly'>
            {activeProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Container>
        </Container>
      </Col>

      <CustomModal>
        <CategoryForm category={category} />
      </CustomModal>
    </>
  )
}
export default Category
