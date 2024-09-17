import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddToCart from "../Pages/AddToCart";

const Header = () => {
  const [open,setOpen] = useState(false);
  return (
    <>
      <header className="bg-black flex text-white justify-between p-2">
        <div>
          <Link to="/">
            <h1 className="font-fascinate text-3xl p-2">StrideSavy</h1>
          </Link>
        </div>
        <nav className="flex space-x-5 p-2 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AboutUs">About Us</NavLink>
          <NavLink to="/ContactUs">Contact Us</NavLink>
          {/* <NavLink to = "/AddToCart"> */}
          <div className="relative flex items-center" onClick={()=> setOpen(!open)}>
            <FaShoppingCart size={24} />
            <span
              className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              style={{ transform: 'translate(50%, -50%)' }}
            >
              0
            </span>
          </div>
          {/* </NavLink> */}
        </nav>
      </header>
      {
        open && <AddToCart/>
      }
    </>
  );
};

export default Header;
