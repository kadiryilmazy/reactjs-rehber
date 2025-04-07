import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try {
            async function fetchProducts() {
                const response = await fetch("http://localhost:5000/products/");
                const data = await response.json();
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
        return <div>Loading...</div>;
    } else if (loadedProducts.length === 0) {
        return <div>No products found</div>;
    } else if (loadedProducts.length > 0) {
        return (
            <ProductList products={loadedProducts}>
                {loadedProducts.map((product) => (
                    <div key={product.id} className="product-item">
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
