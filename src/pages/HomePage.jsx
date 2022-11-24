import PageWithNavbar from '@/template/PageWithNavbar'
import { ListCategory } from '@/components'
import { Container, Row, Col } from 'react-bootstrap'

const HomePage = () => {
  return (
    <PageWithNavbar>
      <Container>
        <Row className='row-cols-sm-1 row-cols-md-2'>
          <ListCategory />
        </Row>
      </Container>
    </PageWithNavbar>
  )
}
export default HomePage
