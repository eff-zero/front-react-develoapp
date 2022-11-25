import { useState } from 'react'

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const handleChange = (event) => {
    const { target } = event
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const resetForm = () => setForm(initialState)

  return { form, handleChange, resetForm, setForm }
}
export default useForm
