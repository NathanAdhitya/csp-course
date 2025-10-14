import { Link } from "react-router";
import type { Product } from "../lib/api";
import AddToCart from "./add-to-cart";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-900">
            <img
                className="w-full h-40 object-cover"
                src={product.thumbnail ?? "/acme.jpg"}
                alt={product.title}
            />
            <div className="px-4 py-2">
                <div className="font-bold text-xl mb-1">{product.title}</div>
                <p className="text-gray-700 text-sm line-clamp-2">
                    {product.description}
                </p>
            </div>
            <div className="px-4 py-2 flex items-center justify-between">
                <div className="text-lg font-semibold">
                    ${product.price.toFixed(2)}
                </div>
                <div className="flex gap-2">
                    <AddToCart product={product} />
                    <Link
                        to={`/products/${product.id}`}
                        className="border border-gray-300 text-sm px-3 py-1 rounded hover:bg-gray-100"
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}
