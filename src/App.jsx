import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import { HomePage, ProductsPage, CartPage, LoginPage, RegisterPage, ProductDetailsPage, ErrorPage, ServerErrorPage } from "@/pages/index.js";
import { NotFoundPage } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "home",
                element: <HomePage />,
            },
            {
                path: "products",
                children: [
                    {
                        index: true,
                        element: <ProductsPage />,
                    },
                    {
                        path: ":id",
                        element: <ProductDetailsPage />,
                    },
                ],
            },
            {
                path: "cart",
                element: <CartPage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
            {
                path: "errors",
                children: [
                    {
                        index: true,
                        element: <ErrorPage />,
                    },
                    {
                        path: "server-error",
                        element: <ServerErrorPage />,
                    },
                    {
                        path: "not-found",
                        element: <NotFoundPage />,
                    },
                ],
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}
export default App;
