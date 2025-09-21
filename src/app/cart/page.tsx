"use client"

import { useCart } from "../context/CartContext"
import Link from "next/link"

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <main>
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/" className="text-blue-600 underline">Go shopping</Link></p>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <img src={item.image ?? "https://via.placeholder.com/80"} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price} each</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => decreaseQty(item.id)} className="btn btn-secondary">-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)} className="btn btn-secondary">+</button>
                <button onClick={() => removeItem(item.id)} className="btn btn-danger">Remove</button>
              </div>
              <p className="font-semibold">${item.price * item.qty}</p>
            </div>
          ))}

          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">Total: ${total}</h2>
            <Link href="/checkout">
              <button className="btn btn-primary mt-4">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </main>
  )
}
