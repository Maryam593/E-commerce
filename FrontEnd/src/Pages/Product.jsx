import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import { Rating } from '@mui/material';
import { AddToCart } from '../ActionCreator/cartAction';

const Product = () => {
    const { id } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    
    const products = useSelector((state) => state.Product.shoeList);
    const product = products.find((proId) => proId.id == id);

    const [count, setCount] = useState(1); // Set default quantity to 1

    if (!product) {
        return <div>Product not found</div>;
    }

    const ProductImage = location.state?.image;

    // Add to cart function
    const handleAddToCart = () => {
        dispatch(AddToCart({
            ...product,
            image: ProductImage // Pass the image URL here
        }, count));
    };

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-5 text-center">About Product</h1>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Image Section */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: product.name,
                                isFluidWidth: true,
                                src: ProductImage,
                            },
                            largeImage: {
                                src: ProductImage,
                                width: 1000,
                                height: 1800,
                            },
                        }}
                    />
                </div>

                {/* Product Details Section */}
                <div className="md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>

                        <Rating value={product.rating || 0} readOnly className="mb-4" />
                        <div className="text-3xl font-bold text-orange-500 mb-2">
                            ${product.price}
                        </div>
                        <div className="text-sm text-black font-semibold mb-4">
                            {product.discount}% off
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center justify-start mb-4">
                            <button
                                onClick={() => setCount(Math.max(1, count - 1))} // Ensure quantity is >= 1
                                className="px-4 py-2 bg-gray-200 rounded-l-md text-lg font-bold hover:bg-gray-300 transition duration-300"
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={count}
                                readOnly
                                className="w-12 text-center h-10 bg-white border border-gray-300"
                            />
                            <button
                                onClick={() => setCount(count + 1)}
                                className="px-4 py-2 bg-gray-200 rounded-r-md text-lg font-bold hover:bg-gray-300 transition duration-300"
                            >
                                +
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="flex">
                            <button
                                onClick={handleAddToCart}
                                className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-md text-lg font-bold transition duration-300 hover:bg-orange-600"
                            >
                                <FaShoppingCart size={20} className="mr-2" /> ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
