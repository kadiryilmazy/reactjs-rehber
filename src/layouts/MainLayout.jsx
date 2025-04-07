import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";
import { Container } from "@mui/material";

export default function MainLayout() {
    return (
        <div className="container">
            <Navbar />

            <Container>
                <Outlet />
            </Container>
        </div>
    );
}
