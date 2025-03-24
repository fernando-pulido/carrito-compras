import { useState, useEffect } from 'react'
import { CartItem, Product, ProductId } from '../types'

const MAX_ITEMS = 5
const MIN_ITEMS = 1

export const useCart = () => {
  const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [cart, setCart] = useState<CartItem[]>(initialCart)

  // Persistencia en Local Storage
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

  const removeFromCart = (id: ProductId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const increaseQuantity = (id: ProductId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity < MAX_ITEMS
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decrementQuantity = (id: ProductId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > MIN_ITEMS
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const clear = () => {
    setCart([])
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decrementQuantity,
    clear,
  }
}
