import PageWithNavbar from '@/template/PageWithNavbar'
import { Cart, ListCategory, ProductModal } from '@/components'
import { Container, Row, Col } from 'react-bootstrap'

const HomePage = () => {
  return (
    <PageWithNavbar>
      <Container>
        <Row className='row-cols-sm-1 row-cols-md-2'>
          <ListCategory />
        </Row>
        <Cart />
        <ProductModal />
      </Container>
    </PageWithNavbar>
  )
}
export default HomePage
