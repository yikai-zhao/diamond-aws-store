import React from "react";
import Link from "next/link";

const cartItems = [
  { id: 1, name: "Round Brilliant Diamond 1.0ct", price: 5200, quantity: 1 },
  { id: 2, name: "Princess Cut Diamond 0.7ct", price: 3100, quantity: 2 }
];

export default function CartPage() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <p className="text-xl font-bold text-blue-700"></p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8 p-4 bg-white shadow-md rounded-lg">
        <span className="text-lg font-semibold">Total: </span>
        <Link href="/checkout">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </main>
  );
}
