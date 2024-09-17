import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const AddToCart = () => {
    const {id} = useParams();
    const location = useLocation;
    const products = useSelector((state) => state.Product.shoeList);
    const product = products.find((proId)=> proId.id == id);

    const ProductImage = location.state?.image;
  return (
    <>
    <div className="container w-[300px] min-h-[200px] border bg-white  fixed top-9 left-[78%] right-0 mx-auto mt-4 p-4 shadow-lg">

    <h1 className='text-2xl'>Products in your Cart</h1>
        <div className="details flex justify-between ">
            <img src={ProductImage} alt="hello" />
            <div className="textDetails">
                <h1>{product.name}</h1>
                <p>{product.description.substring(0,20)}</p>
            </div>
            <div className="delete">
                <FaTrash size={20} className='text-red-700 Delete'/>
            </div>
            
        </div>
        <div className="total flex justify-between mt-4">
            <span>SUBTOTAL</span>
            <span>$400</span>
        </div>
        <div className="checkout mt-4 mb-4">
            <Button variant = "contained" sx = {{backgroundColor : "#FF7518", color : "white"}}>
                PROCEED TO CHECKOUT
            </Button>
        </div>
        <div className="reset">
                <h2 className='text-red-700'>Reset Cart</h2>
            </div>
      
    </div>
    </>
  )
}

export default AddToCart
