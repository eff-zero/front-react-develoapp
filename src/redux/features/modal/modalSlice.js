import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  title: null,
  info: null,
}

const modalSlice = createSlice({
  initialState,
  name: 'modal',
  reducers: {
    openModal: (state, action) => {
      const { payload } = action
      const { info, title } = payload
      return { show: true, title, info }
    },
    closeModal: () => initialState,
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
