import { keyLocalStorage } from '@/env'
import { createSlice } from '@reduxjs/toolkit'

const isSetLocalStorage = () => window.localStorage.getItem(keyLocalStorage)

const checkLocalStorage = () => ({
  authData: isSetLocalStorage() ? JSON.parse(isSetLocalStorage()) : null,
  isAuth: isSetLocalStorage() ? true : false,
})

const authSlice = createSlice({
  initialState: checkLocalStorage(),
  name: 'authSlice',
  reducers: {
    doLoginClient: (state, action) => {
      let authData = action.payload
      localStorage.setItem(keyLocalStorage, JSON.stringify(authData))
      return checkLocalStorage()
    },
    doLogoutClient: () => {
      localStorage.clear()
      return checkLocalStorage()
    },
  },
})

export const { doLoginClient, doLogoutClient } = authSlice.actions
export default authSlice.reducer
