import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";
import requests from "../api/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "./cart/cartSlicer";

export default function ProductDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const { cart, status } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const cartItem = cart?.cartItems.find((item) => item.product.productId === id);

    function handleAddItem(productId) {
        dispatch(addItemToCart({ productId: productId }));
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
    return (
        <ProductItem
            product={product}
            handleAddItem={handleAddItem}
            cartItem={cartItem}
            isAdding={status === "pendingAddItem" + product.productId}
        ></ProductItem>
    );
}
