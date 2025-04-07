import React from "react";
import Grid2 from "@mui/material/Grid";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
    return (
        <Grid2 container spacing={2} sx={{ marginTop: 3 }}>
            {products.map((product) => (
                <Grid2 sx={{ backgroundColor: "primary.light" }} size={{ xs: 6, md: 4, lg: 3 }} key={product.id}>
                    <ProductCard product={product} />
                </Grid2>
            ))}
        </Grid2>
    );
}
