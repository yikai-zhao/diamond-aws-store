import React from "react";

const orderItems = [
  { id: 1, name: "Round Brilliant Diamond 1.0ct", price: 5200, quantity: 1 },
  { id: 2, name: "Princess Cut Diamond 0.7ct", price: 3100, quantity: 2 }
];

export default function CheckoutPage() {
  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    // TODO: integrate with Prisma backend /api/orders
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="space-y-4">
        {orderItems.map((item) => (
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
        <button
          onClick={handlePlaceOrder}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </div>
    </main>
  );
}
