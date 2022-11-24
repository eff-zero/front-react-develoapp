import PageWithNavbar from '@/template/PageWithNavbar'
import { ListCategory } from '@/components'
import { Container, Row, Col } from 'react-bootstrap'

const HomePage = () => {
  return (
    <PageWithNavbar>
      <Container>
        <Row>
          <Col>
            <ListCategory />
          </Col>
          <Col>
            <></>
          </Col>
        </Row>
      </Container>
    </PageWithNavbar>
  )
}
export default HomePage
