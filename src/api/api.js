import { keyLocalStorage, baseURL } from '@/env'
import axios from 'axios'

const getToken = () => {
  let srtLocalStorage = window.localStorage.getItem(keyLocalStorage)
  return JSON.parse(srtLocalStorage)?.auth_token || ''
}

const api = () => {
  return axios.create({
    baseURL,
    withCredentials: true,
    headers: { Authorization: `Bearer ${getToken()}` },
  })
}

export default api
