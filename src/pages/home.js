import React from "react";
import logo from '../static/logo.svg'

const Home = () => {
    return(
        <div className="bg-orange-400 w-screen h-screen flex justify-center">
            <button className=""><a href="/main"><img src={logo} className="w-36"/></a></button>
        </div>
    );
}
export default Home;