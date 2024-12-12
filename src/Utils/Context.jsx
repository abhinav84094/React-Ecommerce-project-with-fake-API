import React, { createContext, useEffect, useState } from 'react';
import axios from './Axios';

export const ProductContext = createContext();

function Context({ children }) {

    const [products, setProducts] = useState([]); // Default to an empty array
    const [error, setError] = useState(null); // Error state to handle API errors

    const getProducts = async () => {
        try {
            const { data } = await axios("/products");
            setProducts(data);
        } catch (error) {
            setError('Failed to load products'); // Set error message
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {error ? <div className="text-red-500">{error}</div> : children}
        </ProductContext.Provider>
    );
}

export default Context;
