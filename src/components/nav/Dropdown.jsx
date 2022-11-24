import { doLogoutClient } from '@/redux/features/auth/authSlice'
import { useAuthState } from '@/redux/store'
import { HOME, LOGIN } from '@/routes'
import { logout } from '@/services/loginServices'
import { NavDropdown, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Dropdown = () => {
  const { authData, isAuth } = useAuthState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const title = authData?.user?.lastname

  const handleLogout = async () => {
    try {
      await logout()
      dispatch(doLogoutClient())
      navigate(HOME)
    } catch (error) {
      console.log(error)
    }
  }

  if (!isAuth) {
    return (
      <Link to={LOGIN}>
        <Button variant='dark'>Login</Button>
      </Link>
    )
  }

  return (
    <NavDropdown title={title} id='nav-dropdown' className='btn btn-dark'>
      {/* <NavDropdown.Divider /> */}
      <NavDropdown.Item eventKey='4.1' onClick={handleLogout}>
        logout
      </NavDropdown.Item>
    </NavDropdown>
  )
}
export default Dropdown
