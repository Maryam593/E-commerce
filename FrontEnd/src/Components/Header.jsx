import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddToCart from "../Pages/AddToCart";
import { useSelector } from "react-redux";
const Header = () => {
  const [open,setOpen] = useState(false);
  const cartItems = useSelector((state) => state.Cart?.cartItems || []);

     // Calculate total quantity
     const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
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
            {totalItems > 0 && (
                        <span className="absolute top-[-10px] right-0 left-4 bg-red-500 text-white rounded-full w-5 h-5 text-center text-sm">
                            {totalItems}
                        </span>
                    )}
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
