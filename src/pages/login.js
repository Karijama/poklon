import React, { Component } from "react";
import Login from '../components/Login.js';
import Header from "../components/header.js"

class login extends Component {
    render(){
        return(
            <div className="">
                <Header/>
                <div className="basis-1/4"></div>
                <div className="font-body text-center basis-1/2">
                    <div className="container basis-1 mt-5">
                        <div className="xl"><h1 className="font-foot text-center text-6xl font-semibold">Войти</h1></div>
                        <div className="xl mt-3"><p className="font-body text-center text-xl font-bold">Войти в существующий аккаунт</p></div>
                    </div>
                    <div className="container basis-1 mt-5">
                        <Login />
                    </div>
                    <div className="container basis-1 mt-5">
                        <div><h1 className="font-foot text-center text-6xl font-semibold">Или</h1></div>
                        <div><p className="font-body text-center text-xl mt-3 font-bold">Войти с...</p></div>
                    </div>
                    <div className="container basis-1 mt-5">
                        <p className="text-center font-body font-bold">Уже есть аккаунт? Пожалуйста войдите.</p>
                    </div>
                </div>
                <div className="basis-1/4"></div>
            </div>
        );
    }
}

export default login;