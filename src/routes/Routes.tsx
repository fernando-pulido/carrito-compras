import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import CartViews from '../views/CartViews'
import { CartItem, Product, ProductId } from '../types'

type RoutesProps = {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: ProductId) => void
  increaseQuantity: (id: ProductId) => void
  decrementQuantity: (id: ProductId) => void
  clear: () => void
}

const AppRoutes: React.FC<RoutesProps> = ({
  cart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decrementQuantity,
  clear,
}) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home addToCart={addToCart} />} />
      <Route
        path="/cart"
        element={
          <CartViews
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decrementQuantity={decrementQuantity}
            clear={clear}
          />
        }
      />
      <Route path="*" element={<p>404: Página no encontrada</p>} />
    </Routes>
  )
}

export default AppRoutes
