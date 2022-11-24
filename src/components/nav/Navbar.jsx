import logoJs from '@/assets/logo-js.png'
import { doLogoutClient } from '@/redux/features/auth/authSlice'
import { useAuthState } from '@/redux/store'
import { HOME } from '@/routes'
import { logout } from '@/services/loginServices'
import { Container, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const Navbar = () => {
  return (
    <nav className='container-fluid shadow bg-primary mb-5'>
      <Container className='d-flex justify-content-between align-items-center py-3'>
        <Link to={HOME}>
          <img
            src={logoJs}
            alt=''
            className='rounded'
            style={{ width: '4rem' }}
          />
        </Link>

        <h4 className='d-none d-md-block text-white fw-bold'>DevelopApp</h4>

        {/* <Button variant='dark' className='fw-semibold' onClick={handleLogout}>
          Logout
        </Button> */}

        <Dropdown />
      </Container>
    </nav>
  )
}
export default Navbar
