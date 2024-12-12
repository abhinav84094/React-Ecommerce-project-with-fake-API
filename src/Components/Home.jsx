import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../Utils/Context';
import Nav from './Nav';
import Loading from './Loading';
import axios from '../Utils/Axios';

function Home() {
    const [products] = useContext(ProductContext);

    const { search } = useLocation(); 
    const query = new URLSearchParams(search);
    const category = query.get('category') || ''; // Default to an empty string if no category

    const [filteredProducts, setFilteredProducts] = useState(products || []);

    const getProductCategory = async () => {
        try {
            const { data } = await axios.get(`/products/category/${category}`);
            setFilteredProducts(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (category) getProductCategory();
        else setFilteredProducts(products);
    }, [category]);

    return (
        <div className='w-screen h-screen flex'>
            <Nav />
            {products ? (
                <div className='w-[100%] h-[100%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
                    {filteredProducts.map((val, i) => (
                        <Link to={`/details/${val.id}`} key={i} className='items-center card border w-44 h-60 border-black rounded-md m-3 p-3 hover:scale-105'>
                            <div className='w-full h-[80%] bg-contain bg-no-repeat bg-center object-fit ml-1' style={{ backgroundImage: `url(${val.image})` }} />
                            <h2 className='align-center truncate mt-5'>{val.title}</h2>
                        </Link>
                    ))}
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default Home;
