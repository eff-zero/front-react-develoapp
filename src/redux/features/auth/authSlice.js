import { createSlice } from '@reduxjs/toolkit'

const initialState = window.localStorage.getItem('auth_data')

const authSlice = createSlice({
  initialState: {},
  name: 'authSlice',
  reducers: {},
})

export default authSlice.reducer
