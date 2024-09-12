import React from "react";
import { Routes,Route } from "react-router-dom";
import DefaultLayout from "../DefaultLayout/DefaultLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
const PageRoutes = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<DefaultLayout><Home/></DefaultLayout>}/>
        <Route path="/AboutUs" element = {<DefaultLayout><AboutUs/></DefaultLayout>}/>
        <Route path="/ContactUs" element = {<DefaultLayout><ContactUs/></DefaultLayout>} />
        </Routes>
        </>
    )
}
export default PageRoutes