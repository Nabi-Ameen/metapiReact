import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { product } = props;
    return (
        <Link to={`/details/${product?.id}`} className='w-80'>
            <div className='p-4 hover:bg-gray-100 h-60'>
                <img src={product?.image} className='h-full' />
            </div>
            <p>{product?.title}</p>
            <div className='flex items-center justify-between pt-4'>
                <h1 className='text-lg font-semibold'>{product?.category}</h1>
                <h1 className='text-lg font-semibold' >Rs {product?.price}</h1>
            </div>

            <div>
                <div>Rating {product?.rating?.rate} (Review {product?.rating?.count})</div>
            </div>
            <button className='bg-blue-700 text-white rounded-lg px-6 py-2 mt-4'>By now</button>
        </Link>
    )
}

export default Card