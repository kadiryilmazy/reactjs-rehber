import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import requests from "../api/apiClient";

export default function ProductsPage() {
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try {
            async function fetchProducts() {
                const data = await requests.products.list();
                setLoadedProducts(data);
            }
            fetchProducts();
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    }, []);
    if (loading) {
        return <Loading />;
    } else if (loadedProducts.length > 0) {
        return (
            <ProductList products={loadedProducts}>
                {loadedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="product-item"
                    >
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </ProductList>
        );
    }

    return <div>ProductPage</div>;
}
