import categoryServices from '@/services/categoryService'
import useForm from '@/hooks/useForm'
import { useModalState } from '@/redux/store'
import { useEffect, useState } from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setNewData } from '@/redux/features/data/dataSlice'
import { closeModal } from '@/redux/features/modal/modalSlice'

const initialState = {
  name: '',
  description: '',
  state: 1,
}

const CategoryForm = () => {
  const dispatch = useDispatch()
  const { form, setForm, handleChange } = useForm(initialState)

  const { info } = useModalState() // Informacion llega por medio del modalSlice
  // const { name, description, state, id } = info

  // const actualState = state === 1 ? 'activo' : 'inactivo'

  // useEffect para saber si es edit o create (modificar)
  useEffect(() => {
    if (info) {
      const { id, name, description } = info
      setForm({ id, name, description })
    } else {
      setForm(initialState)
    }
  }, [])

  const handleEdit = async (form) => {
    try {
      const { data } = await categoryServices().edit(form)
      dispatch(setNewData(data))
      dispatch(closeModal())
    } catch (error) {
      console.log(error)
    }
  }

  const handleCreate = async (form) => {
    try {
      const { data } = await categoryServices().create(form)
      dispatch(setNewData(data))
      dispatch(closeModal())
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (form) => {
    !info ? await handleCreate(form) : await handleEdit(form)
  }

  return (
    <>
      <FloatingLabel controlId='floatingName' label='Nombre' className='mb-3'>
        <Form.Control
          type='text'
          placeholder=' '
          value={form.name}
          onChange={handleChange}
          name='name'
        />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingDescription'
        label='Descripción'
        className='mb-3'
      >
        <Form.Control
          type='text'
          placeholder=' '
          value={form.description}
          onChange={handleChange}
          name='description'
        />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingState'
        label='¿Mostrar categoria?'
        className='mb-3'
      >
        <Form.Select onChange={handleChange} name='state'>
          <option value='1'>Sí</option>
          <option value='0'>No</option>
        </Form.Select>
      </FloatingLabel>

      <Button variant='primary' onClick={() => handleSubmit(form)}>
        Enviar
      </Button>
    </>
  )
}
export default CategoryForm
