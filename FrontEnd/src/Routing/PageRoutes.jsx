import React from "react";
import { Routes,Route } from "react-router-dom";
import DefaultLayout from "../DefaultLayout/DefaultLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Products from "../Pages/Products";
import Product from "../Pages/Product";
import { Provider } from "react-redux";
import ReduxStore from "../Central Store/store";
import AddToCart from "../Pages/AddToCart";
import CheckOut from "../Pages/CheckOut";
const PageRoutes = () => {
    return (
        <>
        <Provider store={ReduxStore}>
        <Routes>
        <Route path="/" element={<DefaultLayout><Home/></DefaultLayout>}/>
        <Route path="/AboutUs" element = {<DefaultLayout><AboutUs/></DefaultLayout>}/>
        <Route path="/ContactUs" element = {<DefaultLayout><ContactUs/></DefaultLayout>} />
        <Route path="/Products" element = {<DefaultLayout><Products/></DefaultLayout>} />
        <Route path="/ProductDetail/:id" element = {<DefaultLayout><Product/></DefaultLayout>} />
        <Route path="/AddToCart" element= {<DefaultLayout><AddToCart/></DefaultLayout>}/>
        <Route path="/CheckOut" element = {<DefaultLayout><CheckOut/></DefaultLayout>}/>
        </Routes>
        </Provider>
        </>
    )
}
export default PageRoutes