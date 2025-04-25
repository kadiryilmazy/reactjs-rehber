import React, { useState } from "react";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Badge, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link, NavLink } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../pages/account/accountSlicer";
import { KeyboardArrowDown } from "@mui/icons-material";

function Navbar() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.account);
    const { cart } = useSelector((state) => state.cart);
    const itemCount = cart ? cart.cartItems.reduce((total, item) => total + item.product.quantity, 0) : 0;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
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
        <Appbar
            position="static"
            sx={{ backgroundColor: "secondary.light" }}
        >
            <Toolbar>
                <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
                    <IconButton color="inherit">
                        <StorefrontIcon />
                    </IconButton>
                    {links.map((link) => (
                        <Button
                            key={link.to}
                            component={NavLink}
                            to={link.to}
                            color="inherit"
                            sx={{ marginLeft: 2 }}
                        >
                            {link.title}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: "flex" }}>
                    <IconButton
                        color="inherit"
                        component={Link}
                        to="/cart"
                        size="large"
                        edge="start"
                    >
                        <Badge
                            badgeContent={itemCount}
                            color="secondary"
                        >
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    {user ? (
                        <>
                            <Button
                                id="user-button"
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDown />}
                                color="inherit"
                            >
                                {user.username}
                            </Button>

                            <Menu
                                id="user-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem
                                    component={Link}
                                    to="/orders"
                                >
                                    Orders
                                </MenuItem>
                                <MenuItem onClick={() => dispatch(logOut())}>Log Out</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            {authLinks.map((link) => (
                                <Button
                                    key={link.to}
                                    component={NavLink}
                                    to={link.to}
                                    color="inherit"
                                >
                                    {link.title}
                                </Button>
                            ))}
                        </>
                    )}
                </Box>
            </Toolbar>
        </Appbar>
    );
}

export default Navbar;
