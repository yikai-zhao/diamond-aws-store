"use client"

import Link from "next/link"
import { useCart } from "./context/CartContext"

const products = [
  { id: 1, name: "Round Brilliant Diamond 1.0ct", price: 5200, stock: 5, shipping: "3-5 business days", image: "https://via.placeholder.com/400x300?text=Diamond+1ct" },
  { id: 2, name: "Princess Cut Diamond 0.7ct", price: 3100, stock: 8, shipping: "5-7 business days", image: "https://via.placeholder.com/400x300?text=Diamond+0.7ct" },
  { id: 3, name: "Emerald Cut Diamond 1.5ct", price: 8700, stock: 3, shipping: "7-10 business days", image: "https://via.placeholder.com/400x300?text=Diamond+1.5ct" }
]

export default function Home() {
  const { addToCart } = useCart()

  return (
    <main>
      <h1 className="text-4xl font-bold text-center mb-10">Diamond AWS Store</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="border rounded-xl shadow hover:shadow-lg transition p-4 bg-white flex flex-col">
            <Link href={`/productid?id=${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-md mb-4 object-cover w-full h-[200px]"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            </Link>
            <p className="text-sm text-gray-600">In stock: {product.stock}</p>
            <p className="text-sm text-gray-600 mb-4">Ships in {product.shipping}</p>

            {/* 底部对齐：价格在左，按钮在右 */}
            <div className="flex justify-between items-center mt-auto">
              <p className="text-gray-700 font-semibold">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-primary"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
