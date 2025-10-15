import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Layout from "./layout";
import CartProvider from "./lib/CartProvider";
import Cart from "./pages/cart";
import Product from "./pages/product";
import Products from "./pages/products";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Products />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="products/:id" element={<Product />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    </StrictMode>
);
