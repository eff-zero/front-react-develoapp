import { CustomModal, ProductForm } from '@/components'
import { closeProductModal } from '@/redux/features/product/productSlice'
import { useDataState, useProductState } from '@/redux/store'
import { useDispatch } from 'react-redux'

const getCategories = (appData) =>
  appData.reduce(
    (acc, el) => (
      el.state === 1 ? acc.push({ id: el.id, name: el.name }) : acc, acc
    ),
    [],
  )

const ProductModal = () => {
  const { showModal, titleModal } = useProductState()

  const appData = useDataState()
  const categories = getCategories(appData)

  const dispatch = useDispatch()
  const handleClose = () => dispatch(closeProductModal())

  return (
    <CustomModal title={titleModal} handleClose={handleClose} show={showModal}>
      <ProductForm categories={categories} />
    </CustomModal>
  )
}
export default ProductModal
