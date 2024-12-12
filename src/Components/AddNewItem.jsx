import React, { useContext, useState } from 'react'
import { ProductContext } from '../Utils/Context';
import {nanoid} from 'nanoid';
import { Link, useNavigate } from 'react-router-dom';
 
function AddNewItem() {

  const navigate = useNavigate();

  const [product, setProduct] = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const AddProductHandler = (e) =>{
    e.preventDefault();

    if(title.trim().length < 1 || image.trim().length < 6 || category.trim().length < 5 || price.trim().length < 1|| description.trim().length < 5){
      alert("Each and every input fields will be valid");
      return ;
    }

    const Product = {
      id:nanoid(),
      title, image, price, category, description
    }
    setProduct([...product, Product]);
    // toast.success("New Product Added!");
    navigate('/');
  };

  return (
    <div>
      <Link to="/" className='text-2xl font-semibold border border-black p-1 m-4'>Home</Link>

      <form onSubmit={AddProductHandler} className='w-screen h-screen flex flex-col items-center mt-10'>
        <h1 className='text-xl font-bold'>Add New Product</h1>
        
        <input onChange={(e)=>setImage(e.target.value)} placeholder='enter image url' type='url' className='p-2 w-1/2 h-8 border-1 border-black border rounded-md m-1' ></input>

        <input onChange={(e)=>setTitle(e.target.value)} placeholder='enter product title' type='text' className='p-2 w-1/2 h-8 border-1 border-black border rounded-md m-1' ></input>

        <div className='w-1/2 flex justify-between'>
        <input onChange={(e)=>setCategory(e.target.value)} placeholder='enter product category' type='text' className='p-2 w-1/2 h-8 border-1 border-black border rounded-md m-1' ></input>

        <input onChange={(e)=>setPrice(e.target.value)} placeholder='enter product price' type='number' className='p-2 w-1/2 h-8 border-1 border-black border rounded-md m-1' ></input>
        </div>

        <textarea onChange={(e)=>setDescription(e.target.value)} placeholder='enter product description' type='textarea' rows='10' className='p-2 w-1/2 h-32 border-1 border-black border rounded-md m-1' ></textarea>

        <div className='w-1/2 '>
          <button className='border border-black p-2 rounded-md bg-orange-100 '>Add Product</button>

        </div>

      </form>
    </div> 
  )
}

export default AddNewItem;