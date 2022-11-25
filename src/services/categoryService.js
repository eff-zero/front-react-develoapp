import api from '@/api/api'

const endpoint = 'category'

const categoryServices = () => {
  const create = (data) => api().post(endpoint, data)
  const edit = (data) => api().patch(`${endpoint}/${data.id}`, data)
  const destroy = (id) => api().delete(`${endpoint}/${id}`)

  return { edit, create, destroy }
}

export default categoryServices
