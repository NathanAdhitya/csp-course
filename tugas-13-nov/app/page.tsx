"use client"
import { useEffect, useState } from "react";
import ProductCard from "../components/product-card";
import { getProducts, type ProductList } from "../lib/api";

export default function Products() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<ProductList | null>(null);

    useEffect(() => {
        let isMounted = true;

        setIsLoading(true);
        getProducts().then((data) => {
            if (isMounted) {
                setProducts(data);
                setIsLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="min-h-screen py-12 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Products</h1>

                {isLoading && <p>Loading products...</p>}
                <div className="grid grid-cols-3 gap-6">
                    {products && products.products.length === 0 && (
                        <p>No products available.</p>
                    )}
                    {products && products.products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
}