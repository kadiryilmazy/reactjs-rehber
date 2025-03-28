import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home, About, Courses } from "./pages/";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Home",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/Courses",
        element: <Courses />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
