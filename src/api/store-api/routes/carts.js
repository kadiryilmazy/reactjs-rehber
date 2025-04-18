const express = require("express");

const { getCart, addItemToCart, removeItem, cartToDTO } = require("../data/carts");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const cart = await getCart(req.cookies.customerId);

        res.cookie("customerId", cart.customerId, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });

        return res.status(200).json(await cartToDTO(cart));
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const productId = req.query.productId;
        const quantity = parseInt(req.query.quantity ?? 1);

        const product = products.find((p) => p.id === productId);

        if (!product) {
            const error = new Error("Ürün bulunamadı");
            error.status = 404;
            throw error;
        }

        // Cart işlemleri...
        const cart = {
            items: [{ product, quantity }],
            total: product.price * quantity,
        };

        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete("/", async (req, res, next) => {
    try {
        const productId = req.query.productId;
        const quantity = parseInt(req.query.quantity);

        let cart = await removeItem(productId, quantity, req.cookies.customerId);

        return res.status(200).json(await cartToDTO(cart));
    } catch (error) {
        next(error);
    }
});

// const getCustomerId = (req) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   let customerId = req.cookies.customerId;

//   if (token != null) {
//     jwt.verify(token, "secret", (err, decoded) => {
//       if (!err) {
//         customerId = decoded.username;
//       }
//     });
//   }
//   return customerId;
// };

module.exports = router;
