import React from "react";
import HeaderA from "../components/headerA.js"
import AddBook from "../components/create";

const Blog = () =>{
    return (
        <div className="bg-blue-50">
            <HeaderA/>
            <div><p className="font-S text-4xl">создание обсуждения <br/> или мероприятия</p></div>
            <AddBook/>
        </div>
    )
}

export default Blog;