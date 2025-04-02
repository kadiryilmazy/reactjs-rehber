import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, AboutPage, CoursesPage, ContactPage, FaqPage, CourseDetailsPage, CourseCreatePage, CourseEditPage } from "./pages/";
import { MainLayout, HelpLayout, CourseLayout } from "./layouts";

import { coursesLoader } from "./pages/course/Courses";
import { courseDetailsLoader } from "./pages/course/CourseDetails";
import { courseAction } from "./pages/course/CourseCreate";

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
                    { index: true, element: <CoursesPage />, loader: coursesLoader },
                    {
                        id: "course-details",
                        path: ":courseid",
                        loader: courseDetailsLoader,
                        children: [
                            {
                                index: true,
                                element: <CourseDetailsPage />,
                            },
                            { path: "edit", element: <CourseEditPage /> },
                        ],
                    },
                    {
                        path: "create",
                        element: <CourseCreatePage />,
                        action: courseAction,
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
