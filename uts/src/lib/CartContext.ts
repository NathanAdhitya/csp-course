import { createContext, useContext } from "react";
import type { Product } from "./api";

export const CartContext = createContext<
    [Product[], React.Dispatch<React.SetStateAction<Product[]>>]
>([[], () => {}]);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
