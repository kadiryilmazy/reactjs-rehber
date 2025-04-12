import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { CartContextProvider } from "@/context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </React.StrictMode>
);
