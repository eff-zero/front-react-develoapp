import { doLogoutClient } from '@/redux/features/auth/authSlice'
import { openModal } from '@/redux/features/modal/modalSlice'
import { openProductModal } from '@/redux/features/product/productSlice'
import { useAuthState } from '@/redux/store'
import { HOME, LOGIN } from '@/routes'
import { logout } from '@/services/loginServices'
import { NavDropdown, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Dropdown = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { authData, isAuth } = useAuthState()

  const isAdmin = authData?.user?.rol_id === 1
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

  const handleOpenToCreate = () => {
    dispatch(
      openModal({
        title: 'Creando categoria',
        info: null,
      }),
    )
  }

  // Abre el modal para crear un producto
  const handleCreateProduct = () => {
    dispatch(
      openProductModal({
        title: 'Creando producto',
      }),
    )
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
      {isAdmin && (
        <>
          <NavDropdown.Item onClick={handleOpenToCreate}>
            Crear categoria
          </NavDropdown.Item>
          <NavDropdown.Item onClick={handleCreateProduct}>
            Crear producto
          </NavDropdown.Item>
        </>
      )}
      {/* <NavDropdown.Divider /> */}
      <NavDropdown.Item eventKey='4.1' onClick={handleLogout}>
        logout
      </NavDropdown.Item>
    </NavDropdown>
  )
}
export default Dropdown
