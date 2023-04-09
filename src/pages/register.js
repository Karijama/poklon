import React, { Component } from "react";
import SignUp from '../components/SignUp.js';
import Header from "../components/header.js"
import star from '../static/Star.svg'
import vk from "../static/vk.svg"

class register extends Component {
    render(){
        return(
            <div className="bg-blue-50">
                <Header/>
                <div className="ml-20">
                    <div className="font-O basis-1/2">
                        <div className="container basis-1 mt-12">
                            <div className="xl flex"><h1 className="font-S  text-6xl font-semibold text-gray-600">Зарегистрироваться</h1><img src={star} className="h-10"/></div>
                            <div className="xl mt-3"><p className="font-O  text-xl font-bold">Заполните поля для <br/> создания аккаунта</p></div>
                        </div>
                        <div className="container basis-1 mt-24">
                            <SignUp />
                        </div>
                        <div className="container basis-1 mt-24">
                            <div className="flex"><h1 className="font-S  text-6xl font-semibold text-gray-600">или...</h1><img src={star} className="h-10"/></div>
                            <div><p className="font-O  text-xl mt-3 font-bold">Зарегистрироваться <br/> с помощью</p></div>
                            <div className="align-middle mt-4"><button className="inline-flex border rounded py-4 px-16 border-black bg-white hover:ring-2 transition-all duration-200"><img src={vk} className="h-6"/>Вконтакте</button></div>
                        </div>
                        <div className="container basis-1 mt-5">
                            <p className=" font-O font-bold">Уже есть аккаунт? <a href="/log" className="text-orange-400 hover:text-orange-500 font-bold">Пожалуйста войдите.</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default register;