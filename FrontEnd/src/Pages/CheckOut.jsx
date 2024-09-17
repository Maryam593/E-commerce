// src/pages/CheckOut.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ResetCart } from '../ActionCreator/cartAction';


const CheckOut = () => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const cartItems = useSelector((state) => state.Cart.cartItems);
    const totalAmount = useSelector((state) => state.Cart.totalAmount);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckout = (e) => {
        e.preventDefault();
        // Handle checkout logic here (e.g., send data to backend)

        // Clear cart after checkout
        dispatch((ResetCart()));
        navigate('/'); // Redirect to Home or any other page
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <form onSubmit={handleCheckout} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700">Address</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block text-gray-700">City</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="zipCode" className="block text-gray-700">Zip Code</label>
                    <input
                        type="text"
                        id="zipCode"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-700">Country</label>
                    <input
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <p>Total Items: {cartItems.length}</p>
                    <p>Total Amount: ${totalAmount}</p>
                </div>
                <div className='flex justify-end'>
                <button
                    type="submit"
                    className="bg-orange-500 text-white p-3 rounded w-full"
                >
                    Place Order
                </button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;
