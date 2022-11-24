import api from '@/api/api'

const login = async (data) => await api().post('login', data)
const logout = async () => await api().get('logout')

export { login, logout }
