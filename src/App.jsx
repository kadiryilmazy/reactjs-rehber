import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, AboutPage, CoursesPage, ContactPage, FaqPage, CourseDetailsPage, CourseCreatePage, CourseEditPage } from "./pages/";
import { MainLayout, HelpLayout, CourseLayout } from "./layouts";

import { coursesLoader } from "./pages/course/Courses";
import { CourseDetailsLoader } from "./pages/course/CourseDetails";

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
                element: <CourseLayout />,
                children: [
                    {
                        index: true,
                        element: <CoursesPage />,
                        loader: coursesLoader,
                    },
                    {
                        id: "course-details",
                        path: ":courseid/",
                        loader: CourseDetailsLoader,
                        children: [
                            {
                                index: true,
                                element: <CourseDetailsPage />,
                            },
                            {
                                path: "edit",
                                element: <CourseEditPage />,
                            },
                        ],
                    },
                    {
                        path: "create",
                        element: <CourseCreatePage />,
                    },
                ],
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
