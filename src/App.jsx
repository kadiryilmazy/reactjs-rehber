import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import { Home, About, Courses } from "./pages/";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/courses",
                element: <Courses />,
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
