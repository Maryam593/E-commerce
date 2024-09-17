import React, { useState } from 'react'
import sliderOne from "../../src/assets/slider-shoe1.jpg"
import sliderTwo from "../../src/assets/slider-shoe2.jpg"
import sliderThree from "../../src/assets/slider-shoe3.jpg"
import sliderFour from "../../src/assets/slider-shoe4.jpg"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Slider = () => {
    const data = [sliderOne, sliderTwo, sliderThree, sliderFour]
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        const move = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(move)
    }

    const handlePrevious = () => {
        const move = currentSlide === 0 ? data.length - 1 : currentSlide - 1;
        setCurrentSlide(move)
    }

    return (
        <>
            <div className="slider">
                <div className="container w-[100%] flex justify-center items-center h-auto">
                    <div className="flex">
                        {/* Image size fixed with width and height */}
                        <img 
                            src={data[currentSlide]} 
                            alt={`Shoe ${currentSlide + 1}`} 
                            className='w-[1550px] h-[650px] object-cover' // Fixed width and height
                        />
                    </div>
                </div>

                <div className="icons flex justify-center space-x-9 mt-4 relative top-[-100px]">
                    <div className="previous cursor-pointer border border-white p-3 ">
                        <FaArrowLeft size={30} onClick={handlePrevious} />
                    </div>

                    <div className="next cursor-pointer border border-white p-3">
                        <FaArrowRight size={30} onClick={handleNext} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider
