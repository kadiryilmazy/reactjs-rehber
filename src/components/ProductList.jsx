import React from "react";

export default function ProductList({ products }) {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <h2>{product.title}</h2>
                </div>
            ))}
        </div>
    );
}
