import { Link } from "react-router";
import type { Product } from "../lib/api";

export default function ProductCardCart({
    product,
    onRemove,
    idx,
}: {
    product: Product;
    onRemove: (id: number) => void;
    idx: number;
}) {
    return (
        <div className="flex gap-6 rounded overflow-hidden shadow-lg bg-white text-gray-900">
            <img
                className="object-cover w-40 h-40"
                src={product.thumbnail ?? "/acme.jpg"}
                alt={product.title}
            />
            <div className="px-4 py-2 w-full flex flex-col">
                <div className="font-bold text-xl mb-1">{product.title}</div>
                <p className="text-gray-700 text-sm line-clamp-2 flex-1">
                    {product.description}
                </p>

                <div className="flex gap-2 ml-auto">
                    <div className="text-lg font-semibold">
                        ${product.price.toFixed(2)}
                    </div>
                    <button
                        onClick={() => onRemove(idx)}
                        className="border border-red-500 text-red-500 text-sm px-3 py-1 rounded hover:bg-red-50"
                    >
                        Remove
                    </button>

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
