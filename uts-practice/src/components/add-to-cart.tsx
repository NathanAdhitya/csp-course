import { useEffect, useState } from "react";
import { useCart } from "../lib/CartContext";
import type { Product } from "../lib/api";

export interface AddToCartProps {
    product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
    const [feedback, setFeedback] = useState<boolean>(false);
    const [cart, setCart] = useCart();
    const handleAddToCart = () => {
        setCart([...cart, product]);
        setFeedback(true);
    };

    useEffect(() => {
        if (feedback) {
            const timer = setTimeout(() => {
                setFeedback(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [feedback]);
    
    return (
        <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
        >
            {feedback ? "Added" : "Add to Cart"}
        </button>
    );
}
