import cartIcon from '@/assets/shopping-cart_icon.png'
import { openCart } from '@/redux/features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const IconCart = () => {
  const dispatch = useDispatch()
  const handleOpenCart = () => dispatch(openCart())

  return (
    <div>
      <img
        src={cartIcon}
        alt=''
        style={{ width: '1.5rem', cursor: 'pointer' }}
        className='user-select'
        onClick={handleOpenCart}
      />
      {2}
    </div>
  )
}
export default IconCart
