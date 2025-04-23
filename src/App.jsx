import { createBrowserRouter, RouterProvider } from "react-router";
import requests from "./api/apiClient";
import { useEffect, useState } from "react";
import { getCart, setCart } from "./pages/cart/cartSlicer";
import { useDispatch } from "react-redux";
import { setUser, logOut, getUser } from "./pages/account/accountSlicer";
import Loading from "./components/Loading";

import MainLayout from "@/layouts/MainLayout";
import {
    HomePage,
    ProductsPage,
    LoginPage,
    RegisterPage,
    ProductDetailsPage,
    ErrorPage,
    ServerErrorPage,
    NotFoundPage,
    CartPage,
} from "@/pages/index.js";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "home", element: <HomePage /> },
            {
                path: "products",
                children: [
                    { index: true, element: <ProductsPage /> },
                    { path: ":id", element: <ProductDetailsPage /> },
                ],
            },
            { path: "cart", element: <CartPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
            {
                path: "errors",
                children: [
                    { index: true, element: <ErrorPage /> },
                    { path: "server-error", element: <ServerErrorPage /> },
                    { path: "not-found", element: <NotFoundPage /> },
                ],
            },
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);

function App() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const initApp = async () => {
        await dispatch(getUser());
        await dispatch(getCart());
    };

    useEffect(() => {
        initApp().then(() => setLoading(false));
    }, []);
    if (loading) {
        return <Loading message="Uygulama Başlatılıyor..." />;
    }
    return <RouterProvider router={router} />;
}

export default App;
