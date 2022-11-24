import { FloatingLabel, Form } from 'react-bootstrap'

const CategoryForm = ({ category }) => {
  const { name, description, state } = category
  const actualState = state === 1 ? 'activo' : 'inactivo'

  return (
    <>
      <FloatingLabel controlId='floatingName' label='Nombre' className='mb-3'>
        <Form.Control type='email' placeholder='email' value={'hola'} />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingDescription'
        label='Descripción'
        className='mb-3'
      >
        <Form.Control type='email' placeholder='email' value={'hola'} />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingState'
        label={`Estado de categoria: ${actualState}`}
        className='mb-3'
      >
        <Form.Select>
          <option value='1'>Activar</option>
          <option value='0'>Desactivar</option>
        </Form.Select>
      </FloatingLabel>
    </>
  )
}
export default CategoryForm
