import PageWithNavbar from '@/template/PageWithNavbar'
import { Cart, ListCategory, ProductModal } from '@/components'
import { Container, Row, Col } from 'react-bootstrap'

const HomePage = () => {
  return (
    <PageWithNavbar>
      <Container>
        <Row>
          <ListCategory />
        </Row>
        <Cart />
        <ProductModal />
      </Container>
    </PageWithNavbar>
  )
}
export default HomePage
