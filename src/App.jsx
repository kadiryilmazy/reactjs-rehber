import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import { HomePage, ProductsPage, CartPage, LoginPage, RegisterPage, ProductDetailsPage } from "./pages/index.js";

function App() {
    const router = createBrowserRouter([
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
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
