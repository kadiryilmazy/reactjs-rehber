import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import { HomePage, AboutPage, CoursesPage, ContactPage, FaqPage } from "./pages/";
import MainLayout from "./layouts/MainLayout";
import HelpLayout from "./layouts/HelpLayout";

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
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "courses",
                element: <CoursesPage />,
            },
            {
                path: "help",
                element: <HelpLayout />,
                children: [
                    {
                        index: true,
                        element: <ContactPage />,
                    },
                    {
                        path: "contact",
                        element: <ContactPage />,
                    },
                    {
                        path: "faq",
                        element: <FaqPage />,
                    },
                ],
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
