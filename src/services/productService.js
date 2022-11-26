import api from '@/api/api'

const endpoint = 'product'

const productService = () => {
  const create = (data) => api().post(endpoint, data)
  const update = (data) => api().patch(`${endpoint}/${data.id}`, data)
  const destroy = (id) => api().delete(`${endpoint}/${id}`)

  return { update, create, destroy }
}

export default productService
