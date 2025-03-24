import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import AppRoutes from './routes'
import { useCart } from '../components/Carts/CartFunctions'

const RoutesPublic = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decrementQuantity,
    clear,
  } = useCart()

  return (
    <Router>
      <Navbar />
      <AppRoutes
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decrementQuantity={decrementQuantity}
        clear={clear}
      />
    </Router>
  )
}

export default RoutesPublic
