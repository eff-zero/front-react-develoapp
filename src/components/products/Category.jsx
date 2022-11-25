import { useGetRole } from '@/helpers'
import { openModal, closeModal } from '@/redux/features/modal/modalSlice'
import { useModalState } from '@/redux/store'
import { Container, Button, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { CategoryForm, CustomModal, Product } from '..'

const styles = {
  header_category:
    'd-flex justify-content-between align-items-start mb-3 border-bottom py-2',
}

const Category = ({ category }) => {
  const { id, name, description, products } = category
  const { show, title } = useModalState()
  const dispatch = useDispatch()

  const activeProducts = products.filter((product) => product.state === 1)

  const handleOpenToEdit = () =>
    dispatch(
      openModal({
        title: 'Editando categoria',
        info: { id, name, description },
      }),
    )

  const handleClose = () => dispatch(closeModal())

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
                <div className='d-flex gap-1'>
                  <Button
                    variant='primary'
                    size='sm'
                    onClick={handleOpenToEdit}
                  >
                    Editar Categoria
                  </Button>
                </div>
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

      <CustomModal show={show} title={title} handleClose={handleClose}>
        <CategoryForm />
      </CustomModal>
    </>
  )
}
export default Category
