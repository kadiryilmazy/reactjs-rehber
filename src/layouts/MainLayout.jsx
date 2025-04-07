import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";

export default function MainLayout() {
    return (
        <div className="container">
            <Navbar />
            <Outlet />
        </div>
    );
}
