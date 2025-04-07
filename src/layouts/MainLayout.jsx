import React from "react";
import { Outlet } from "react-router";
import ButtonUsage from "../components/ButtonUsage.jsx";

export default function MainLayout() {
    return (
        <div className="container">
            <ButtonUsage />
            <h1>MainLayout</h1>
            <Outlet />
        </div>
    );
}
