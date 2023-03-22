import React, { Component } from "react";
import SignUp from '../components/SignUp.js';
import Header from "../components/header.js"

class register extends Component {
    render(){
        return(
            <div className="">
                <Header/>
                <div className="basis-1/4"></div>
                <div className="font-body text-center basis-1/2">
                    <div className="container basis-1 mt-5">
                        <div className="xl"><h1 className="font-S text-center text-6xl font-semibold">Зарегистрироваться</h1></div>
                        <div className="xl mt-3"><p className="font-body text-center text-xl font-bold">Заполните поля для создания аккаунта</p></div>
                    </div>
                    <div className="container basis-1 mt-5">
                        <SignUp />
                    </div>
                    <div className="container basis-1 mt-5">
                        <div><h1 className="font-foot text-center text-6xl font-semibold">Или</h1></div>
                        <div><p className="font-body text-center text-xl mt-3 font-bold">Зарегистрироваться с...</p></div>
                    </div>
                    <div className="container basis-1 mt-5">
                        <p className="text-center font-body font-bold">Уже есть аккаунт? <a href="/log" className="text-yellow-400 hover:text-yellow-500 font-bold">Пожалуйста войдите.</a></p>
                    </div>
                </div>
                <div className="basis-1/4"></div>
            </div>
            
        );
    }
}

export default register;