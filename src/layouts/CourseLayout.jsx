import { Link, Outlet } from "react-router";

function CourseLayout() {
    return (
        <div id="course-layout">
            <h1>Course List</h1>
            <p>
                <Link to={"create"}>New Course</Link>
            </p>
            <Outlet />
        </div>
    );
}

export default CourseLayout;
