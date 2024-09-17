import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveFromCart, ResetCart } from '../ActionCreator/cartAction';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const cartItems = useSelector((state) => state.Cart.cartItems);
    const totalAmount = useSelector((state) => state.Cart.totalAmount);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemove = (productId) => {
        console.log("Removing item with id:", productId); // Debugging line
        dispatch(RemoveFromCart(productId));
    };

    const handleCheckout = () => {
        navigate('/CheckOut');
    };

    const handleResetCart = () => {
        dispatch(ResetCart());
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="fixed right-0 top-16 w-full max-w-md bg-white shadow-lg rounded-lg p-4 border border-gray-200 z-50 md:w-1/3 md:mt-11">
            <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center text-lg text-gray-600">
                    <p>Your cart is empty</p>
                </div>
            ) : (
                <>
                    <div className="cart-items mb-4 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex flex-col md:flex-row items-center border-b py-4">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg shadow-md mb-2 md:mb-0" />
                                <div className="ml-4 flex-1">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="text-red-600 hover:text-red-800 font-bold mt-2 md:mt-0"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary text-center">
                        <h2 className="text-xl font-bold mb-4">Subtotal: ${totalAmount.toFixed(2)}</h2>
                        <button
                            className="bg-orange-500 text-white w-full p-2 rounded-lg transition duration-300 mb-2"
                            onClick={handleCheckout}
                        >
                            Proceed to Checkout
                        </button>
                        <p
                            onClick={handleResetCart}
                            className="text-red-500 cursor-pointer"
                        >
                            Reset Cart
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
