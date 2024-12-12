import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../Utils/Axios';
import Loading from './Loading';

function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getsingleproduct = async () => {
        try {
            const { data } = await axios.get(`/products/${id}`);
            setProduct(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getsingleproduct();
    }, []);

    return product ? (
        <div className='w-[60%] h-[100%] flex justify-center m-auto p-[10%] items-center gap-10'>
            <img className='fit-container h-72 w-[30%]' src={`${product.image}`} alt={product.title} />
            <div className='flex flex-col w-80'>
                <div className='text-2xl font-bold'>{product.title}</div>
                <div className='font-semibold text-xl p-2'>$ {product.price}</div>
                <div className='text-sm'>{product.description}</div>
                <div className='text-gray-400'>{product.category}</div>
                <div className='flex m-5 gap-10'>
                    <button className='w-40 border border-black rounded-md p-2 text-blue-500'>Add to Cart</button>
                    <button className='w-40 border border-black rounded-md p-2 text-red-500'>Buy</button>
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
}

export default Details;
