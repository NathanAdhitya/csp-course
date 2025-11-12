"use client";
import ProductCardCart from "@/components/product-card-cart";
import { useCart } from "@/lib/CartContext";

export default function Cart() {
  const [cart, setCart] = useCart();

  function handleRemove(id: number) {
    const newCart = cart.filter((_, idx) => idx !== id);
    setCart(newCart);
  }

  return (
    <div className="min-h-screen py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cart</h1>

        <div className="grid grid-cols-3 gap-6">
          {cart.length === 0 && <p>No products in cart.</p>}
          {cart &&
            cart.map((p, idx) => (
              <ProductCardCart
                key={idx}
                idx={idx}
                product={p}
                onRemove={handleRemove}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
