import React from "react";
import { NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
const Header = () => {
    return(
        <>
         <header className="bg-black flex text-white justify-between p-2">
                <div>
                    <h1 className="font-fascinate text-3xl">StrideSavy</h1>
                </div>
            <nav className="flex space-x-5  p-2">
           
                <NavLink to="/">Home</NavLink>
                <NavLink to = "/AboutUs">AboutUs</NavLink>
                <NavLink to = "/ContactUs">ContactUs</NavLink>
                <div>
                    <FaShoppingCart/>
                    <span>{0}</span>
                </div>
            </nav>
         </header>
        </>
    )
}

export default Header