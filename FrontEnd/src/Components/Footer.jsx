import React from "react";
import { NavLink } from "react-router-dom";
import MediaIcons from "./MediaIcons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          <h1 className="font-fascinate text-3xl"><NavLink to = "/">StrideSavy</NavLink></h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mb-6">
          <NavLink to="/" className="hover:text-orange-500">Home</NavLink>
          <NavLink to="/AboutUs" className="hover:text-orange-500">About Us</NavLink>
          <NavLink to="/ContactUs" className="hover:text-orange-500">Contact Us</NavLink>
        </nav>

        {/* Social Media Icons */}
       <MediaIcons/>

        {/* Footer Text */}
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} StrideSavy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
