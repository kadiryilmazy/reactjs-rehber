import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";
import requests from "../api/apiClient";

export default function ProductDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

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
    return <ProductItem product={product}></ProductItem>;
}
