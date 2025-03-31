import React from "react";
import { NavLink, Outlet } from "react-router";

function HelpLayout() {
    return (
        <div id="help-layout">
            <h1>Help</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos fugiat fugit voluptatibus esse eligendi asperiores eum facere delectus ea veniam ex pariatur earum deleniti
                minima voluptatum sapiente, nesciunt animi. Velit quasi suscipit dicta voluptates, amet nulla! Quaerat, ut inventore? Quo consectetur, aliquam dicta quis at reiciendis ea provident
                dignissimos doloribus id fuga a laborum minima magnam inventore commodi adipisci! Dicta eum, cumque reiciendis at est aperiam cum quasi dignissimos nemo perspiciatis harum ex officia
                quam hic nulla omnis maxime esse, quo neque veniam possimus voluptate corporis soluta? Cum, laborum?
            </p>
            <nav>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="faq">FAQ</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}

export default HelpLayout;
