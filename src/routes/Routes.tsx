import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import Home from '../views/Home'
import Navbar from '../components/Navbar'
import CartViews from '../views/CartViews'
import { CartItem, Product, ProductId } from '../types'

import '../components/cart.css'

const RoutesPublic = () => {
  //hacer el carrito persistente  osea q se guarde en local storage
  const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [cart, setCart] = useState<CartItem[]>(initialCart)
  const MAX_ITEMS = 5
  const MIM_ITEMS = 0

  //hacer el carrito persistente
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const itemInCart = prevCart.find(item => item.id === product.id)
      if (itemInCart) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (Id: ProductId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== Id))
  }

  const increaseQuantity = (id: ProductId) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  const decrementQuantity = (id: ProductId) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity && item.quantity >= MIM_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + -1,
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  const clear = () => {
    setCart([])
  }

  return (
    <Router>
      <Navbar />
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
    </Router>
  )
}

export default RoutesPublic
