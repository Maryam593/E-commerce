import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShoeList } from '../ActionCreator/action';
// import { AddToCart } from '../ActionCreator/cartAction'; // Import add to cart action
import Shoes1 from "../assets/shoes1.jpg";
import Shoes5 from "../assets/shoes5.jpg";
import Shoes3 from "../assets/shoes3.jpg";
import Shoes4 from "../assets/shoes4.jpg";
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCards = () => {
    const productImages = [Shoes1, Shoes3, Shoes4, Shoes5, Shoes1, Shoes3, Shoes5, Shoes4, Shoes3, Shoes5, Shoes1];
    const dispatch = useDispatch();
    const Products = useSelector((state) => state.Product.shoeList);

    useEffect(() => {
        dispatch(ShoeList());
    }, [dispatch]);

    // const handleAddToCart = (product) => {
    //     dispatch(AddToCart(product)); // Dispatch addToCart action
    // };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Featured Products</h1>
            <div className="flex flex-wrap justify-center gap-6 p-4">
                {Products.map((product, index) => (
                    <div
                        key={index}
                        className="card bg-white w-[300px] h-[400px] overflow-hidden shadow-lg hover:shadow-gray-600 transition-shadow duration-300 ease-in-out relative"
                    >
                        <Link
                            to={`/ProductDetail/${product.id}`}
                            state={{ image: productImages[index % productImages.length] }}
                            className="block"
                        >
                            <div className="relative">
                                <img
                                    src={productImages[index % productImages.length]}
                                    alt={product.name}
                                    className="h-48 w-full object-cover"
                                />
                                <span
                                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
                                    // onClick={(e) => {
                                    //     e.preventDefault(); // Prevent link navigation on click
                                    //     handleAddToCart(product);
                                    // }}
                                >
                                    <FaShoppingCart size={24} className='text-orange-500' />
                                </span>
                            </div>
                            <div className="text p-4">
                                <h1 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h1>
                                <h2 className="text-orange-500 text-2xl font-bold mb-2">${product.price}</h2>
                                <h2 className='text-gray-700 mb-2'>{product.discount}% off</h2>
                                <div className="ratings flex justify-between items-center">
                                    <Rating value={product.rating} readOnly />
                                    <span className="text-gray-600">{product.location}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCards;
