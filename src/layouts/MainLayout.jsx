import React from "react";
import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div id="main-layout">
            <h1>MainLayout</h1>
            <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="courses">Courses</NavLink>
                <NavLink to="help">Help</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
