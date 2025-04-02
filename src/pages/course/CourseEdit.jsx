import React from "react";
import { useRouteLoaderData } from "react-router";

export default function CourseEdit() {
    const course = useRouteLoaderData("course-details");
    return <h1>Course Edit:{course.title}</h1>;
}
