import React from "react";
import logo from '../static/logo.svg';

function header() {
    return(
        <div className="font-O border-b bg-white">
            <div className="container flex py-3">
                <div className="container basis-1/4 pl-12 "><a><img src={logo} className="w-1/2 pt-2" alt='logo'/></a></div>
                <div className="container flex pl-64 justify-end">
                    <div className="container pt-5"><a href="/main">Главное</a></div>
                    <div className="container pt-5 "><a href="/main">Популярное</a></div>
                    <div className="container pt-5 "><a href="/main">Новости</a></div>
                    <div className="container pt-5 "><a href="/main">Создать пост</a></div>
                    <div className="container pt-5 "><a href="/create-blog">Создать блог</a></div>
                </div>
                <div className="container basis-1/6"><a href="/prof"><button as='a' className="font-bold inline-flex pt-5 pl-18 rounded text-black hover:underline transition-colors duration-150">
                    Профиль
                </button></a></div>
            </div>
        </div>
    );
}

export default header;