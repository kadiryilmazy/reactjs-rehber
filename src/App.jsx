import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import { HomePage, ProductsPage, LoginPage, RegisterPage, ProductDetailsPage, ErrorPage, ServerErrorPage } from "@/pages/index.js";
import { NotFoundPage } from "./pages";
import Cart from "./pages/cart/Cart";
import requests from "./api/apiClient";
import { useEffect } from "react";
import { setCart } from "./pages/cart/cartSlicer";
import { useDispatch } from "react-redux";
import CartPage from "./pages/cart/Cart";
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
        requests.cart
            .get()
            .then((cart) => dispatch(setCart(cart)))
            .catch((error) => console.log(error));
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
