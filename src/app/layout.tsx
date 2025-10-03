import "./globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Diamond AWS Store",
  description: "An e-commerce store for diamonds powered by Next.js and Prisma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header className="bg-white shadow fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </header>
          <main className="pt-20">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
