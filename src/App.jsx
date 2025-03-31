import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import { HomePage, AboutPage, CoursesPage, ContactPage, FaqPage, CourseDetailsPage } from "./pages/";
import MainLayout from "./layouts/MainLayout";
import HelpLayout from "./layouts/HelpLayout";
import { coursesLoader } from "./pages/Courses";
import { CourseDetailsLoader } from "./pages/CourseDetails";

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
                loader: coursesLoader,
            },
            {
                path: "courses/:courseid/",
                element: <CourseDetailsPage />,
                loader: CourseDetailsLoader,
            },
            {
                path: "help",
                element: <HelpLayout />,
                children: [
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
