import { keyLocalStorage } from '@/env'
import axios from 'axios'

const getToken = () => {
  let srtLocalStorage = window.localStorage.getItem(keyLocalStorage)
  return JSON.parse(srtLocalStorage)?.auth_token || ''
}

const baseURL = 'http://localhost:8000/api'
const withCredentials = true

const api = () =>
  axios.create({
    baseURL,
    withCredentials,
    headers: { Authorization: `Bearer ${getToken()}` },
  })

export default api
