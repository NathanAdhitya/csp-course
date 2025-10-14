import { useState } from "react";
import type { Product } from "./api";
import { CartContext } from "./CartContext";

export default function CartProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [items, setItems] = useState<Product[]>([]);

    return (
        <CartContext.Provider value={[items, setItems]}>
            {children}
        </CartContext.Provider>
    );
}
