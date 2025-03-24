import { useState } from 'react'

import { db } from '../../data/db'
import Cart from '../../components/Carts/Cart'

import { Product } from '../../types'

type HomeProps = {
  addToCart: (product: Product) => void
}

const Home = ({ addToCart }: HomeProps) => {
  const [data] = useState<Product[]>(db)

  return (
    <>
      <main className="container-2xl mt-5">
        <h2 className="text-center">Nuestros Developers!!!</h2>
        <div className="row ">
          {data.map(product => (
            <Cart
              productProps={product}
              key={product.id}
              addToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </main>
    </>
  )
}
export default Home
