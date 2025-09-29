import React from "react";

const products = [
  {
    id: 1,
    name: "Round Brilliant Diamond 1.0ct",
    stock: 5,
    shippingDays: "3-5",
    price: 5200,
    image: "https://via.placeholder.com/400x300?text=Diamond+1.0ct"
  },
  {
    id: 2,
    name: "Princess Cut Diamond 0.7ct",
    stock: 8,
    shippingDays: "5-7",
    price: 3100,
    image: "https://via.placeholder.com/400x300?text=Diamond+0.7ct"
  },
  {
    id: 3,
    name: "Emerald Cut Diamond 1.5ct",
    stock: 3,
    shippingDays: "7-10",
    price: 8700,
    image: "https://via.placeholder.com/400x300?text=Diamond+1.5ct"
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center p-6">Diamond AWS Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm">In stock: {product.stock}</p>
              <p className="text-gray-600 text-sm">
                Ships in {product.shippingDays} business days
              </p>
              <p className="text-lg font-semibold mt-2"></p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
