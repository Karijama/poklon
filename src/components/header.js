import React from "react";
import logo from '../static/logo.svg';
import ent from '../static/Enter.svg';
import lupa from '../static/lupa.svg';

function header() {
    return(
        <div className="font-O border-b">
            <div className="container flex py-3">
                <div className="container basis-1/4 pl-12 "><a><img src={logo} className="w-1/2 pt-2" alt='logo'/></a></div>
                <div className="container flex justify-between">
                    <div className="container pr-12"><form className="border rounded mt-4 h-8 px-2">
                        <button type="submit"><img src={lupa} className=""/></button>
                        <input type="text" placeholder="Поиск по обсуждению" className="outline-none"/>
                    </form></div>
                    <div className="container ml-6 flex justify-end">
                        <div className="container pt-5"><a href="/">Главное</a></div>
                        <div className="container pt-5"><a href="/">Популярное</a></div>
                        <div className="container pt-5"><a href="/">Новости</a></div>
                    </div>
                </div>
                <div className="container basis-1/6"><a href="/reg"><button as='a' className="font-bold inline-flex pt-5 pl-18 rounded text-black hover:underline transition-colors duration-150">
                    <img src={ent} className="px-2 py-0.5"/>
                    Войти
                </button></a></div>
            </div>
        </div>
    );
}

export default header;