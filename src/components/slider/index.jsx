import React from 'react'
import sliderImage from "../../assets/images/carousal.jpg"

const Slider = () => {
    return (
        <div>
            <img src={sliderImage} className='h-80 w-full' />
        </div>
    )
}

export default Slider