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
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-900">
            <img
                className="mx-auto h-40"
                src={product.thumbnail}
                alt={product.title}
            />
            <div className="px-4 py-2">
                <div className="font-bold text-xl mb-1">{product.title}</div>
            </div>
            <div className="px-4 py-2 flex items-center justify-between">
                <div className="text-lg font-semibold">
                    ${product.price.toFixed(2)}
                </div>

                <div className="flex gap-2 ml-auto">
                    <button
                        onClick={() => onRemove(idx)}
                        className="border border-red-500 text-red-500 text-sm px-3 py-1 rounded hover:bg-red-50"
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}
