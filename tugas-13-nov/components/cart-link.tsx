"use client";
import { useCart } from "@/lib/CartContext";
import Link from "next/link";

export default function CartLink() {
    const [cart] = useCart();
    return (
        <Link href="/cart" className="hover:underline">
              <span>Cart ({cart.length})</span>
            </Link>
    );
}