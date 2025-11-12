import Link from "next/link";
import type { Product } from "../lib/api";
import AddToCart from "./add-to-cart";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-900">
      <img
        className="mx-auto h-40"
        src={product.url_gambar}
        alt={product.judul}
      />
      <div className="px-4 py-2">
        <Link
          href={`/products/${product.id}`}
          className="font-bold text-xl mb-1 hover:underline"
        >
          {product.judul}
        </Link>
      </div>
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="text-lg font-semibold">${product.harga.toFixed(2)}</div>
        <div className="flex gap-2">
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}
