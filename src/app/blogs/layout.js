import NavigationForBlogPage from "@/components/navigationforblogpage";
import React from "react";

export default function layout({ children }) {
    return (
        <div>
            <section>
                <NavigationForBlogPage />
                {children}
            </section>
        </div>
    );
}
