import React, { Component } from "react";
import Login from '../components/Login.js';
import door from "../static/door.svg";
import dots2 from '../static/dots2.svg'

class login extends Component {
    render(){
        return(
            <div className="">
                <div className="flex justify-center mt-44"><img src={door} /></div>
                <div className="flex justify-center mt-4"><p className="font-bold text-5xl">Вход</p></div>
                <Login className=""/>
                <div className="flex justify-center"><img src={dots2} /></div>
                <div className="flex justify-center"><a className="text-orange-400 hover:text-orange-200">Нет аккаунта?</a></div>
            </div>
        );
    }
}

export default login;