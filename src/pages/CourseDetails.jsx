import React from "react";
import { Link, useLoaderData } from "react-router";

export default function CourseDetails() {
    const course = useLoaderData();
    console.log(course);

    return (
        <>
            <Link to="/courses">courses</Link>
            <h1> {course.title}</h1>
            <p> {course.description}</p>
        </>
    );
}

export async function CourseDetailsLoader({ params }) {
    const { courseid } = params;
    const res = await fetch(`http://localhost:5000/courses/` + courseid);
    return res.json();
}
