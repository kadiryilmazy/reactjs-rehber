import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import {
    HomePage,
    ProductsPage,
    LoginPage,
    RegisterPage,
    ProductDetailsPage,
    ErrorPage,
    ServerErrorPage,
} from "@/pages/index.js";
import { NotFoundPage } from "./pages";
import Cart from "./pages/cart/Cart";
import requests from "./api/apiClient";
import { useEffect } from "react";
import { setCart } from "./pages/cart/cartSlicer";
import { useDispatch } from "react-redux";
import CartPage from "./pages/cart/Cart";
import { setUser } from "./pages/account/accountSlicer";
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
        dispatch(setUser(JSON.parse(localStorage.getItem("user"))));

        requests.account
            .getUser()
            .then((user) => {
                setUser(user);
                localStorage.setItem("user", JSON.stringify(user));
            })
            .catch((error) => {
                console.log(error);
                dispatch(logout());
            });

        requests.cart
            .get()
            .then((cart) => dispatch(setCart(cart)))
            .catch((error) => console.log(error));
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
