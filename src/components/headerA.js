import React from "react";
import { Link } from "react-router-dom";
import logo from '../static/logo.svg';

function header() {
    return(
        <div className="font-O">
            <div className="container flex py-3">
                <div className="container basis-1/4"><a><img src={logo} className="w-1/4 py-2" alt='logo'/></a></div>
                <div className="container flex justify-between py-3 basis-1/2">
                    
                </div>
                <div className="container basis-1/4 ms-8"><Link><img src=""/></Link></div>
            </div>
        </div>
    );
}

export default header;