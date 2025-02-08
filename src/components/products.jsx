import React, { useState } from 'react';
import { category } from '../assets/data.js';
import Card from './Card';

const Products = ({ products }) => {

    const [selectCategory, setSelectedCategory] = useState("All")

    const filterData = products?.filter((item) => selectCategory === "All" ? products : item?.category === selectCategory);

    return (
        <div className='flex justify-center mt-20 '>
            <div className='w-2/12 bg-gray-100 pt-10 px-5 space-y-4'>
                {
                    category?.map((item, index) => {
                        return (
                            <div key={index} onClick={() => setSelectedCategory(item)} className={`${item === selectCategory && "bg-blue-500 text-white hover:bg-blue-500"} cursor-pointer hover:bg-gray-300 rounded-lg p-2`}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>

            <div className='w-10/12 pl-10'>
                <div className='grid grid-cols-3'>
                    {
                        filterData?.map((product, index) => {
                            return (
                                <div key={index}>
                                    <Card product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products;