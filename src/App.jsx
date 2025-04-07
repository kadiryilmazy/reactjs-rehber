import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
    HomePage,
    AboutPage,
    CoursesPage,
    ContactPage,
    FaqPage,
    CourseDetailsPage,
    CourseCreatePage,
    CourseEditPage,
    coursesLoader,
    courseDetailsLoader,
    courseAction,
    NotFoundPage,
    ErrorPage,
} from "./pages/";
import { MainLayout, CourseLayout, HelpLayout } from "./layouts";
import { courseDeleteAction } from "./pages/course/Courses";

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
                errorElement: <ErrorPage />,
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
                            { path: "edit", element: <CourseEditPage />, action: courseAction },
                            { path: "delete", action: courseDeleteAction },
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
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
