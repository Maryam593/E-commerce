import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import AddToCart from "../Pages/AddToCart";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.Cart?.cartItems || []);

  // Calculate total quantity
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="bg-black text-white p-4 flex items-center justify-between flex-wrap">
        <div>
          <Link to="/">
            <h1 className="text-2xl sm:text-3xl font-fascinate p-2">StrideSavy</h1>
          </Link>
        </div>
        <nav className="flex flex-wrap items-center space-x-5 mt-2 sm:mt-0">
          <NavLink to="/" className="text-sm sm:text-base">
            Home
          </NavLink>
          <NavLink to="/AboutUs" className="text-sm sm:text-base">
            About Us
          </NavLink>
          <NavLink to="/ContactUs" className="text-sm sm:text-base">
            Contact Us
          </NavLink>
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <FaShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white rounded-full w-5 h-5 text-center text-xs sm:text-sm">
                {totalItems}
              </span>
            )}
          </div>
        </nav>
      </header>
      {open && <AddToCart />}
    </>
  );
};

export default Header;
