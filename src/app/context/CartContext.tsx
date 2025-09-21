"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type CartItem = {
  id: number
  name: string
  price: number
  qty: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  removeItem: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id)
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p)
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const increaseQty = (id: number) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty: p.qty + 1 } : p))
  }

  const decreaseQty = (id: number) => {
    setCart(prev => prev.map(p => p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p))
  }

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}
