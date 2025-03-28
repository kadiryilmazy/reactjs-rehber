import React from "react";
import { Link, NavLink } from "react-router";

export default function About() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/courses">Courses</NavLink>
            </nav>
            <div>
                <h1>About</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil dolores, commodi doloribus officia incidunt eaque ullam nisi illum ipsa, minus alias? Consequuntur
                    voluptate quae eligendi. Non laborum modi quam. Voluptatem illum numquam nisi expedita quod tenetur, tempora nobis nesciunt laudantium, facere in nemo iure dolorem, necessitatibus
                    tempore aut officiis cum incidunt. Veniam enim laboriosam impedit perspiciatis. A, fugit culpa!
                </p>
            </div>
        </>
    );
}
