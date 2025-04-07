import { Card, CardContent, CardMedia, CardActions, IconButton, Button, CardActionArea } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router";
import { currencyTRY } from "../utils/format";

export default function ProductCard({ product }) {
    return (
        <Card>
            <CardActionArea component={Link} to={"/products/" + product.id}>
                <CardMedia sx={{ height: 160, backgroundSize: "contain" }} image={`http://localhost:5000/images/${product.image}`} title={product.title} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" color="primary.dark">
                        {product.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" color="secondary.dark">
                        {currencyTRY.format(product.price)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>
                <Button>Sepete Ekle</Button>
            </CardActions>
        </Card>
    );
}
