import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";

export default function MainLayout() {
    return (
        <div className="container">
            <ToastContainer position="bottom-right" theme="colored" />
            <Navbar />
            <Container sx={{ mt: 3 }}>
                <Outlet />
            </Container>
        </div>
    );
}
