import { Link, Outlet } from "react-router";

function CourseLayout() {
    return (
        <div id="course-layout">
            <h1>Courses</h1>
            <p>
                <Link to={"create"}>New Course</Link>
            </p>
            <Outlet />
        </div>
    );
}

export default CourseLayout;
