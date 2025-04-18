import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router";
import { currencyTRY } from "../utils/formats";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../pages/cart/cartSlicer";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.cart);

    if (!product) {
        return <Typography>Ürün bilgisi yükleniyor...</Typography>; // Veya başka bir placeholder
    }

    return (
        <Card>
            <CardActionArea component={Link} to={`/products/${product.id}`}>
                <CardMedia sx={{ height: 160, backgroundSize: "contain" }} image={product.image ? `http://localhost:5000/images/${product.image}` : "varsayılan_resim_yolu"} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" color="primary.dark">
                        {product?.title || "Ürün Adı Yok"}
                    </Typography>
                    <Typography variant="body1" color="secondary.dark">
                        {product?.price ? currencyTRY.format(product.price) : "Fiyat Bilgisi Yok"}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>
                <Button onClick={() => dispatch(addItemToCart({ productId: product.id }))}>{status === `pendingAddItem${product.id}` ? <CircularProgress size="20px" /> : "Sepete Ekle"}</Button>
            </CardActions>
        </Card>
    );
}
