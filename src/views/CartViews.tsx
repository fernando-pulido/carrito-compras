import { CartItem } from '../types'

import '../components/cart.css'

interface CartViewsProps {
  cart: CartItem[]
  removeFromCart: (id: number) => void
  increaseQuantity: (id: number) => void
  decrementQuantity: (id: number) => void
  clear: () => void
}

const CartViews = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decrementQuantity,
  clear,
}: CartViewsProps) => {
  console.log(cart)

  if (cart.length === 0) {
    return <p>El carrito está vacío</p>
  }

  const cartTotal = () => {
    let count = 0
    cart.forEach(item => {
      count += item.price * item.quantity
    })
    return count
  }

  return (
    <>
      <br />
      <br />
      {cart.map(product => (
        <div className="card mb-3  bg-dark" key={product.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="imagen1"
                src={`/img/${product.image}.png`}
                alt={product.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <small className="text">${product.price}</small>
                </p>
                <p>Cantidad {product.quantity}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => decrementQuantity(product.id)}
                >
                  -
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h2>Valor Total ${cartTotal()}</h2>
      <button className="btn btn-danger" onClick={clear}>
        Limpiar Carrito
      </button>
    </>
  )
}

export default CartViews
