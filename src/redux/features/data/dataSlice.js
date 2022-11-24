import { createSlice } from '@reduxjs/toolkit'

// Slice para manejar los datos de todo la app
const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: [],
  reducers: {
    setNewData: (state, action) => action.payload,
  },
})

export const { setNewData } = dataSlice.actions
export default dataSlice.reducer
