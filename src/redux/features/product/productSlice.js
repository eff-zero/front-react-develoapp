import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showModal: false,
  titleModal: '',
  info: null,
}

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    openProductModal: (state, action) => {
      const { payload } = action
      state.showModal = true
      state.titleModal = payload.title
      state.info = payload?.info || null
    },
    closeProductModal: () => initialState,
  },
})

export const { openProductModal, closeProductModal } = productSlice.actions
export default productSlice.reducer
