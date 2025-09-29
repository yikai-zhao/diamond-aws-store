import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Diamond Store
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-blue-600">
            Cart
          </Link>
          <Link href="/checkout" className="text-gray-700 hover:text-blue-600">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
}
