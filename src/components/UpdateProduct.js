import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import {  useUpdateProductMutation } from '../store'
import Button from './Button';

const UpdateProduct = () => {

    const history = useHistory();

    const [newProduct, setNewProduct] = useState('');

    const [updateProduct, results] = useUpdateProductMutation();

    const handleChange = (e) => {
        const { value, name } = e.target;
        setNewProduct({ ...newProduct, [name]: value })
    }

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        updateProduct(newProduct);
        history.push("/");
    }


    return (
        <div className='m-2'>
            <h1>Update Product</h1>
            <form onSubmit={handleUpdateProduct} className='m-2 flex flex-row items-center'>
                <input className='border border-inherit p-1 mx-2' onChange={handleChange} name='name' type="text" placeholder='Enter Product Name' />
                <Button type='submit'>Update Product</Button>
            </form>
        </div>
    )
}

export default UpdateProduct