import useForm from '@/hooks/useForm'
import { setNewData } from '@/redux/features/data/dataSlice'
import { closeProductModal } from '@/redux/features/product/productSlice'
import { useDataState, useProductState } from '@/redux/store'
import { productService } from '@/services'
import { useEffect } from 'react'
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const initialForm = {
  name: '',
  category_id: '',
  price: '',
  description: '',
  stock: '',
}

const ProductForm = ({ categories }) => {
  const dispatch = useDispatch()
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

  const handleCreate = async (form) => {
    try {
      const { data } = await productService().create(form)
      dispatch(setNewData(data))
      dispatch(closeProductModal())
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpdate = async (form) => {
    try {
      const { data } = await productService().update(form)
      dispatch(setNewData(data))
      dispatch(closeProductModal())
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (form) => {
    !info ? await handleCreate(form) : await handleUpdate(form)
  }

  return (
    <Container>
      <FloatingLabel label='Categoria' className='mb-4'>
        <Form.Select onChange={handleChange} name='category_id'>
          <option value=""> Seleccionar categoria </option>
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
          value={form.stock}
          placeholder=' '
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel
        label="Descripción ( usar '|' para separar )"
        className='mb-3'
      >
        <Form.Control
          type='text'
          name='description'
          value={form.description}
          placeholder=' '
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel label='¿Mostrar producto?' className='mb-3'>
        <Form.Select onChange={handleChange} name='state'>
          <option value='1'> Sí </option>
          <option value='0'> No </option>
        </Form.Select>
      </FloatingLabel>

      <Button variant='primary' onClick={() => handleSubmit(form)}>
        Enviar
      </Button>
    </Container>
  )
}

export default ProductForm
