import cartIcon from '@/assets/shopping-cart_icon.png'
import { openCart } from '@/redux/features/cart/cartSlice'
import { useCartState } from '@/redux/store'
import { useDispatch } from 'react-redux'

const IconCart = () => {
  const { cart } = useCartState()
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
      {cart.length}
    </div>
  )
}
export default IconCart
