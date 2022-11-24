import { ErrorText } from '@/components'
import { doLogoutClient, doLoginClient } from '@/redux/features/auth/authSlice'
import { login, logout } from '@/services/loginServices'
import { useState, useRef } from 'react'
import { FloatingLabel, Button, Form, Card, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const styles = {
  container_fluid:
    'vh-100 d-flex justify-content-center align-items-center bg-light',
  card_header: 'fs-4 bg-dark text-white text-uppercase fw-bold text-center',
}

const LoginPage = () => {
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const emailRef = useRef()
  const passwordRef = useRef()

  // Se puede echar para otro lado
  const handleLogin = async (e) => {
    e.preventDefault()

    let email = emailRef.current.value.trim()
    let password = passwordRef.current.value.trim()
    let form = { email, password }

    try {
      const response = await login(form)
      const data = response.data
      dispatch(doLoginClient(data))
    } catch (errorByServer) {
      // Mejorar
      console.log(errorByServer)
      const typeError = errorByServer?.response?.data
      typeError?.errors
        ? setError(typeError?.errors) // Errores por campos en DB (validation Laravel)
        : setError(typeError) // Error general, mesanje
    }
  }

  // Se puede echar para otro lado (quitar de aquí)
  const handleLogout = async () => {
    try {
      const reponse = await logout()
      console.log(reponse)
      dispatch(doLogoutClient())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container fluid className={styles.container_fluid}>
      <Card className='shadow-sm' style={{ width: '25rem' }}>
        <Card.Header className={styles.card_header}>
          Inicio de Sesion
        </Card.Header>

        <Card.Body className='p-4'>
          <form onSubmit={handleLogin}>
            <FloatingLabel
              controlId='floatingEmail'
              label='Usuario'
              className='mb-3'
            >
              <Form.Control type='email' placeholder='email' ref={emailRef} />
              {error?.email && <ErrorText message={error.email[0]} />}
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingPassword'
              label='Contraseña'
              className='mb-3'
            >
              <Form.Control
                type='password'
                placeholder='contraseña'
                ref={passwordRef}
              />
              {error?.password && <ErrorText message={error.password[0]} />}
              {error?.message && <ErrorText message={error.message} />}
            </FloatingLabel>

            <Container>
              <Button variant='dark' type='submit'>
                Entrar
              </Button>
            </Container>
          </form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default LoginPage
