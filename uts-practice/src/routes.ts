import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Layout from "./layout";
import Product from "./pages/product";

const router = createBrowserRouter([
    {
        Component: Layout,
        children: [
            { index: true, Component: Home },
            { path: "cart", Component: Cart },
            { path: "products/:id", Component: Product },
            { path: "products", Component: Products },
        ],
    },
]);

export default router;
