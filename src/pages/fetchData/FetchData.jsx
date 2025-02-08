import React, { useEffect, useState } from 'react'
import Products from '../../components/products';
import axios from 'axios';

const FetchData = () => {
    const [products, setProducts] = useState();

    const getProdusts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response?.data);
    }

    setTimeout(() => {
        console.log("exection time 3 second")
    }, 3000)

    useEffect(() => {
        getProdusts()
    }, [])

    return (
        <div>
            <Products products={products} />
        </div>
    )
}

export default FetchData