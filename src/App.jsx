import { createBrowserRouter, RouterProvider } from "react-router";
import requests from "./api/apiClient";
import { useEffect } from "react";
import { setCart } from "./pages/cart/cartSlicer";
import { useDispatch } from "react-redux";
import { setUser, logOut } from "./pages/account/accountSlicer";

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

    useEffect(() => {
        requests.account
            .getUser()
            .then((user) => {
                setUser(user);
                localStorage.setItem("user", JSON.stringify(user));
            })
            .catch((error) => {
                console.log(error);
                dispatch(logOut());
            });

        requests.cart
            .get()
            .then((cart) => dispatch(setCart(cart)))
            .catch((error) => console.log(error));
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
