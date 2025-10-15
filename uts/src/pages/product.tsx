import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct, type Product } from "../lib/api";
import AddToCart from "../components/add-to-cart";

export default function Product() {
    const params = useParams();
    const id = params.id;
    const [product, setProduct] = useState<Product | false | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        let isMounted = true;

        if (!id) {
            if (isMounted) {
                setProduct(false);
            }
            return;
        }

        getProduct(id)
            .then((data) => {
                if (!data) {
                    if (isMounted) {
                        setProduct(false);
                    }
                    return;
                }

                if (isMounted) {
                    setProduct(data);
                }
            })
            .catch((e: Error) => {
                if (isMounted) {
                    setProduct(false);
                    setErrorMessage(e.message);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [id]);

    const goBack = () => {
        window.history.back();
    };

    if (product === null) {
        return (
            <div className="product-page  max-w-4xl mx-auto p-4">
                <button
                    onClick={goBack}
                    className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    Back
                </button>
                <p>Loading product...</p>
            </div>
        );
    }

    if (product === false) {
        return (
            <div className="product-page max-w-4xl mx-auto p-4">
                <button
                    onClick={goBack}
                    className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    Back
                </button>
                <p>Error: {errorMessage}</p>
            </div>
        );
    }

    return (
        <div className="product-page max-w-4xl mx-auto p-4">
            <button
                onClick={goBack}
                className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
                Back
            </button>

            <div className="flex gap-4">
                <img
                    src={product.thumbnail ?? "/acme.jpg"}
                    alt={product.title}
                    className="w-1/3 h-auto object-cover rounded"
                />
                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-gray-700 mb-4">
                        Category: {product.category}
                    </p>
                    <div className="text-lg font-semibold mb-4">
                        ${product.price.toFixed(2)}
                    </div>
                    <AddToCart product={product} />
                </div>
            </div>
        </div>
    );
}
