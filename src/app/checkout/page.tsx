"use client"

import { useCart } from "../context/CartContext"
import { useState } from "react"
import Link from "next/link"

export default function CheckoutPage() {
  const { cart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    payment: "Credit Card"
  })

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string) => {
    return /^[0-9\-\+\s]{7,15}$/.test(phone)
  }

  const placeOrder = () => {
    if (!form.name || !form.address || !form.email || !form.phone) {
      alert("Please fill out all required fields")
      return
    }
    if (!validateEmail(form.email)) {
      alert("Please enter a valid email address")
      return
    }
    if (!validatePhone(form.phone)) {
      alert("Please enter a valid phone number")
      return
    }
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <main className="text-center py-12">
        <h1 className="text-3xl font-bold mb-6">Order Confirmed</h1>
        <p className="text-lg mb-4">Thank you {form.name}, your order has been placed successfully.</p>
        <p className="mb-2">Shipping to: {form.address}</p>
        <p className="mb-2">We will contact you at {form.email} or {form.phone}</p>
        <p className="mb-6">Payment Method: {form.payment}</p>
        <Link href="/" className="btn btn-primary">Return to Home</Link>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/" className="text-blue-600 underline">Go shopping</Link></p>
      ) : (
        <div className="grid md:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-4">
              {cart.map(item => (
                <li key={item.id} className="flex justify-between items-center border-b pb-2">
                  <span>{item.name} x {item.qty}</span>
                  <span>${item.price * item.qty}</span>
                </li>
              ))}
            </ul>
            <div className="text-right mt-6">
              <h2 className="text-xl font-bold">Total: ${total}</h2>
            </div>
          </div>

          {/* Checkout Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Shipping Address"
                value={form.address}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
                required
              />
              <select
                name="payment"
                value={form.payment}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              >
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
              </select>
              <button
                type="button"
                onClick={placeOrder}
                className="btn btn-primary w-full"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
