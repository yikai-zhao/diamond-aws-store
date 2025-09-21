import "./globals.css"
import { CartProvider } from "./context/CartContext"
import Link from "next/link"

export const metadata = {
  title: "Diamond AWS Store",
  description: "E-commerce web application for diamond sales hosted on AWS",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header className="bg-white shadow fixed top-0 left-0 right-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">Diamond AWS Store</Link>
              <div className="space-x-6">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/cart" className="hover:underline">Cart</Link>
                <Link href="/checkout" className="hover:underline">Checkout</Link>
              </div>
            </nav>
          </header>
          <main className="max-w-7xl mx-auto px-6 py-24">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  )
}
