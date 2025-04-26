import React from "react";

export default async function Page({ params }) {
    const blog_id = (await params).id;
    return <h1>blog{blog_id}</h1>;
}
