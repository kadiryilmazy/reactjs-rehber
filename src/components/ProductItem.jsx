import React from "react";
import Grid2 from "@mui/material/Grid";
import { Button, CircularProgress, Paper, Stack, Typography } from "@mui/material";
import { currencyTRY } from "../utils/formats";
import ReportIcon from "@mui/icons-material/Report";

export default function ProductItem({ product, handleAddItem, cartItem, isAdding }) {
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
                    <Typography variant="h5" color="secondary" sx={{ mt: 3 }}>
                        {currencyTRY.format(product.price)}
                    </Typography>

                    <Stack direction="row" display="flex" alignItems="center" gap={2} sx={{ mt: 3 }}>
                        <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => handleAddItem(product.id)}>
                            Sepete Ekle
                        </Button>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                            <ReportIcon color="secondary" />
                            Sepetinizde {cartItem?.product.quantity > 0 && !isAdding ? cartItem.product.quantity : <CircularProgress size="20px" sx={{ ml: 2 }} color="secondary" />} adet var.
                        </Typography>
                    </Stack>
                </Paper>
            </Grid2>
        </Grid2>
    );
}
