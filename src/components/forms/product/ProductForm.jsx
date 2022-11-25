import useForm from '@/hooks/useForm'
import { useDataState, useProductState } from '@/redux/store'
import { useEffect } from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'

const initialForm = {
  name: '',
  category_id: '',
  price: '',
  description: '',
  stock: '',
}

const ProductForm = ({ categories }) => {
  let data = null

  const { info } = useProductState()
  const { form, setForm, handleChange } = useForm(initialForm)

  if (info) {
    const { image, state, ...rest } = info
    data = rest
  }

  useEffect(() => {
    info ? setForm(data) : setForm(initialForm)
  }, [])

  return (
    <Container>
      <FloatingLabel label='Categoria' className='mb-4'>
        <Form.Select value={form.category_id} onChange={handleChange}>
          {categories.map((categorie) => (
            <option key={categorie.id} value={categorie.id}>
              {categorie.name}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel label='Nombre' className='mb-3'>
        <Form.Control
          type='text'
          name='name'
          value={form.name}
          placeholder=' '
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel label='Precio' className='mb-3'>
        <Form.Control
          type='number'
          name='price'
          value={form.price}
          placeholder=' '
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel label='Stock' className='mb-3'>
        <Form.Control
          type='number'
          name='stock'
          value={form.number}
          placeholder=' '
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel label='Descripción' className='mb-3'>
        <Form.Control
          type='text'
          name='description'
          value={form.description}
          placeholder=' '
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel label='¿Mostrar producto?' className='mb-3'>
        <Form.Select>
          <option value='1'> Sí </option>
          <option value='0'> No </option>
        </Form.Select>
      </FloatingLabel>
    </Container>
  )
}

export default ProductForm
