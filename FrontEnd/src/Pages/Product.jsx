import { Rating } from "@mui/material";
import React from "react";
import { FaHeart, FaShareAlt, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const location = useLocation();
  const products = useSelector((state) => state.Product.shoeList);

  const product = products.find((proId) => proId.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Accessing images
  const ProductImage = location.state?.image;
  const [count, setCount] = useState(0);
  const handleNext = () => {
    const update = count + 1;
    setCount(update);
  };
  const handlePrevious = () => {
    const update = count - 1;
    //tky no. 0 sy nichy na jye!

    if (update >= 0) {
      setCount(update);
    }

    // setCount(update)
  };
  return (
    <>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-5">About Product</h1>

        <div className="flex justify-between items-start gap-8">
          {/* Image Section */}
          <div className="w-1/2">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: product.name, // Correct product name here
                  isFluidWidth: true,
                  src: ProductImage, // Pass image string directly here
                },
                largeImage: {
                  src: ProductImage, // Pass image string directly here
                  width: 1000,
                  height: 1800,
                },
              }}
            />
          </div>

          {/* Product Details Section */}
          <div className="w-2/4 bg-white p-20 rounded-lg shadow-lg h-[545px] flex">
            <div>
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>

              {/* Rating */}
              <Rating value={product.rating || 0} readOnly className="mb-4" />

              {/* Price */}
              <div className="text-3xl font-bold text-orange-500 mb-2">
                ${product.price}
              </div>

              {/* Discount */}
              <div className="text-sm text-black font-semibold mb-4">
                {product.discount}% off
              </div>
              {/* Counter */}
              <div className="flex items-center justify-start mb-4">
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2 bg-gray-200 rounded-l-md text-lg font-bold hover:bg-gray-300 transition duration-300"
                >
                  -
                </button>
                <input
                  type="text"
                  name="value"
                  id="value"
                  value={count}
                  readOnly
                  className="w-12 text-center h-10 bg-white border border-gray-300"
                />
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-gray-200 rounded-r-md text-lg font-bold hover:bg-gray-300 transition duration-300"
                >
                  +
                </button>
              </div>

              {/* Action Button */}
              <div className="flex">
                <button className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-md text-lg font-bold transition duration-300 hover:bg-orange-600">
                  <FaShoppingCart size={20} className="mr-2" /> ADD TO CART
                </button>
              </div>

              {/* Icons */}
              <div className="flex items-center gap-4 mt-10 text-gray-500">
                <span className="cursor-pointer hover:text-blue-600">
                  <FaShareAlt size={20} />
                </span>
                <span className="cursor-pointer hover:text-red-600">
                  <FaHeart size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
