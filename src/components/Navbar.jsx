import React from "react";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Badge, Box, Button, IconButton } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link, NavLink } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
    const links = [
        { to: "/home", title: "Home" },
        { to: "/products", title: "Products" },
        { to: "/errors", title: "Errors" },
    ];
    const authLinks = [
        { to: "/login", title: "login" },
        { to: "/register", title: "register" },
    ];
    return (
        <Appbar position="static" sx={{ backgroundColor: "secondary.light" }}>
            <Toolbar>
                <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
                    <IconButton color="inherit">
                        <StorefrontIcon />
                    </IconButton>
                    {links.map((link) => (
                        <Button key={link.to} component={NavLink} to={link.to} color="inherit" sx={{ marginLeft: 2 }}>
                            {link.title}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ display: "flex" }}>
                    <IconButton color="inherit" component={Link} to="/cart" size="large" edge="start">
                        <Badge badgeContent="2" color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    {authLinks.map((link) => (
                        <Button key={link.to} component={NavLink} to={link.to} color="inherit" sx={{ marginLeft: 2 }}>
                            {link.title}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </Appbar>
    );
}

export default Navbar;
