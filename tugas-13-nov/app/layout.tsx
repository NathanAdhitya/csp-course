"use client";

import "./globals.css";
import Link from "next/link";
import CartLink from "@/components/cart-link";
import CartProvider from "@/lib/CartProvider";

const NavbarLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  return (
    <Link href={to} className="hover:underline">
      <span>{label}</span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          Beauty and Luxury&apos;s Products
        </div>
        <ul className="flex space-x-4">
          <li>
            <NavbarLink to="/" label="Home" />
          </li>
          <li>
            <CartLink />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
