import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DetailProduct = () => {

    const { id } = useParams();
    const [products, setProducts] = useState([]);

    const getProdusts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response?.data);
    }

    useEffect(() => {
        getProdusts()
    }, [])

    const findProduct = products?.find((item) => {
        return item?.id === Number(id)
    });

    console.log("findProduct", findProduct);

    return (
        <div className='flex justify-center my-20 '>
            <div className='w-4/12 border'>
                <div className='p-4 hover:bg-gray-100 h-60'>
                    <img src={findProduct?.image} className='h-full' />
                </div>
                <p>{findProduct?.title}</p>
                <div className='flex items-center justify-between pt-4'>
                    <h1 className='text-lg font-semibold'>{findProduct?.category}</h1>
                    <h1 className='text-lg font-semibold' >Rs {findProduct?.price}</h1>
                </div>

                <div>
                    <div>Rating {findProduct?.rating?.rate} (Review {findProduct?.rating?.count})</div>
                </div>

                <div className='py-5'>
                    {findProduct?.description}
                </div>
                <button className='bg-blue-700 text-white rounded-lg px-6 py-2 mt-4'>By now</button>
            </div>
        </div>
    )
}

export default DetailProduct