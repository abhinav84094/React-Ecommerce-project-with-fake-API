import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../Utils/Context';

function Nav() {
    const [products] = useContext(ProductContext);

    let distinct_Category = products && products.reduce((acc, curval) => {
        return [...acc, curval.category];
    }, []);

    distinct_Category = [...new Set(distinct_Category)];

    const color = () => {
        return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`;
    };

    const { search, pathname } = useLocation();

    return (
        <nav className='w-[20%] h-full bg-zinc-200 overflow-hidden'>
            <div>{(pathname !== "/" || search.length > 0) ? (<Link to="/" className='text-2xl font-semibold border border-black p-1 m-4'>Home</Link>) : ""}</div>
            <div className='text-xl pt-10 text-center'>
                <Link to="/addnewitem" className='border border-black rounded-md p-2 m-1'>Add New Product</Link>
            </div>
            <hr className='h-0.5 mt-5 bg-blue-200' />
            <h1 className='text-xl m-2'>Category</h1>
            <div>
                {distinct_Category.map((val, index) => (
                    <Link to={`/?category=${val}`} key={index} className='flex items-center'>
                        <div style={{ backgroundColor: color() }} className='h-3 w-3 rounded-full border-black border ml-2'></div>
                        <span className='ml-1'>{val}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Nav;
