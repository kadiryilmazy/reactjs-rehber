import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";
import requests from "../api/apiClient";
import { useCartContext } from "../context/CartContext";

export default function ProductDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);

    const [product, setProduct] = useState(null);
    const { cart, setCart } = useCartContext();
    const cartItem = cart?.cartItems.find((item) => item.product.productId === id);

    function handleAddItem(productId) {
        setIsAdding(true);
        requests.cart
            .addItem(productId)
            .then((cart) => setCart(cart))
            .catch((error) => console.log(error))
            .finally(() => setIsAdding(false));
    }

    useEffect(() => {
        async function fetchProductDetails() {
            try {
                const data = await requests.products.details(id);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <Loading />;
    }
    if (!product) {
        return <div>Product not found</div>;
    }
    return <ProductItem product={product} handleAddItem={handleAddItem} cartItem={cartItem} isAdding={isAdding}></ProductItem>;
}
