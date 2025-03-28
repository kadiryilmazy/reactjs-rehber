import React from "react";
import { Link, NavLink } from "react-router";

function Courses() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/courses">Courses</NavLink>
            </nav>
            <div>
                <h1>Courses</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et id illum nisi facere, labore doloremque unde quidem, eos accusantium qui maxime ipsum deleniti aperiam consequuntur,
                    commodi eligendi temporibus fugiat optio?
                </p>
            </div>
        </>
    );
}

export default Courses;
