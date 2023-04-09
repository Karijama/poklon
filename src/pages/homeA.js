import React from "react";
import hi from '../static/hi.svg'
import dots1 from '../static/dots1.svg'

const HomeA = () => {
    const [open, setOpen] = React.useState(false);
    return(
        <div className="w-screen">
            <div className="">
                <div className="flex justify-center mt-48"><img src={hi} className="w-24"/></div>
                <div className="flex justify-center mt-4"><p className="text-5xl font-bold">Здравствуйте</p></div>
                <div className="flex justify-center mt-4"><p className="text-2xl">Войдите, чтобы начать</p></div>
                <div className="flex justify-center m-4"><a href="/log" className="text-white text-xl"><button className="rounded-2xl bg-orange-400 w-64 h-14">Войти</button></a></div>
                <div className="flex justify-center mt-64">
                    <img src={dots1} className="w-36"/>
                </div>
            </div>
        </div>
    );
    }
export default HomeA;