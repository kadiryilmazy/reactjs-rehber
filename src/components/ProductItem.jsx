import React from "react";
import Grid2 from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";

export default function ProductItem({ product }) {
    return (
        <Grid2 container spacing={2} sx={{ marginTop: 3 }}>
            <Grid2 sx={{ backgroundColor: "primary.light" }} size={{ lg: 4, md: 5, sm: 6, xs: 12 }} key={product.id}>
                <Paper variant="outlined" sx={{ p: 3 }}>
                    <img src={`http://localhost:5000/images/${product.image}`} alt={product.title} style={{ width: "100%" }} />
                </Paper>
            </Grid2>
            <Grid2 size={{ lg: 8, md: 7, sm: 6, xs: 12 }} key={product.id}>
                <Paper variant="outlined" sx={{ p: 3 }}>
                    <Typography variant="h4" component="h1" color="secondary.dark">
                        {product.title}
                    </Typography>
                    <Typography variant="body1">{product.description}</Typography>
                </Paper>
            </Grid2>
        </Grid2>
    );
}
