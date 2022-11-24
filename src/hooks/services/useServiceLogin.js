import api from '@/api/api'
import { useState } from 'react'

const initialState = {
  data: [],
  error: null,
  isLoading: false,
}

const loginService = async (data) => await api().post('login', data)
const logoutService = async () => await api().get('logout')

const useServiceLogin = () => {
  const [stateService, setStateService] = useState(initialState)

  const handleLogin = async () => {
    try {
    } catch (error) {}
  }

  const handleLogout = async () => {
    try {
    } catch (error) {}
  }

  return { handleLogin, handleLogout }
}

export default useServiceLogin
