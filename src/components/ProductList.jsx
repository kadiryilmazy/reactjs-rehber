import React from "react";
import Grid2 from "@mui/material/Grid";

export default function ProductList({ products }) {
    return (
        <Grid2 container spacing={2}>
            {products.map((product) => (
                <Grid2 sx={{ backgroundColor: "primary.light" }} size={{ xs: 6, md: 4, lg: 3 }} key={product.id}>
                    <p>{product.title}</p>
                </Grid2>
            ))}
        </Grid2>
    );
}
