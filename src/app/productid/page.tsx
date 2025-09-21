"use client"

import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"
import Link from "next/link"

const products = [
  { id: 1, name: "Round Brilliant Diamond 1.0ct", price: 5200, stock: 5, shipping: "3-5 business days", description: "A classic round brilliant cut diamond with excellent clarity and brilliance. Perfect choice for engagement rings.", image: "https://via.placeholder.com/600x400?text=Diamond+1ct" },
  { id: 2, name: "Princess Cut Diamond 0.7ct", price: 3100, stock: 8, shipping: "5-7 business days", description: "A sharp princess cut diamond with modern elegance. Excellent sparkle with affordable pricing.", image: "https://via.placeholder.com/600x400?text=Diamond+0.7ct" },
  { id: 3, name: "Emerald Cut Diamond 1.5ct", price: 8700, stock: 3, shipping: "7-10 business days", description: "An elegant emerald cut diamond, known for its step cuts and refined style. Popular among collectors.", image: "https://via.placeholder.com/600x400?text=Diamond+1.5ct" }
]

export default function ProductPage() {
  const { addToCart } = useCart()
  const [productId, setProductId] = useState<number | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = Number(params.get("id"))
    if (id) setProductId(id)
  }, [])

  const product = products.find(p => p.id === productId)

  if (!product) {
    return <main style={{ padding: 40 }}>Product not found</main>
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-6 font-sans">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full h-[400px] object-cover rounded-lg shadow" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-2">${product.price}</p>
          <p className="text-sm text-gray-600 mb-1">In stock: {product.stock}</p>
          <p className="text-sm text-gray-600 mb-6">Ships in {product.shipping}</p>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary mr-4"
          >
            Add to Cart
          </button>
          <Link href="/" className="btn btn-secondary">Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
