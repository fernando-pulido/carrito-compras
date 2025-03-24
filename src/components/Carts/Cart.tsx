import type { Product } from '../../types'
export type CartProductProps = {
  productProps: Product
  addToCart: (item: Product) => void
}

import '../css/cart.css'
const Cart = ({ productProps, addToCart }: CartProductProps) => {
  const { id, image, name, price, description } = productProps
  return (
    <div className="card mb-3  bg-dark" key={id}>
      <div className="row g-0">
        <div className="col-md-4">
          <img className="imagen" src={`/img/${image}.png`} alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text ">${price}</small>
            </p>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => addToCart(productProps)}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
