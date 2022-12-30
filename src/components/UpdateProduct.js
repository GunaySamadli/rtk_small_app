import React, { useState } from 'react'
import { useUpdateProductMutation } from '../store'
import Button from './Button';

const UpdateProduct = () => {

    const [products, setProducts] = useState('');

    const [updateProduct, result] = useUpdateProductMutation();

    const handleChange = (e) => {
        const { value, name } = e.target;
        setProducts({ ...products, [name]: value })
    }

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        updateProduct(products);
        setProducts('')
    }


    return (
        <div className='m-2'>
            <form onSubmit={handleUpdateProduct} className='m-2 flex flex-row items-center'>
                <input className='border border-inherit p-1 mx-2' onChange={handleChange} name='name' type="text" placeholder='Enter Product Name' />
                <Button loading={result.isLoading} type='submit'>Add Product</Button>
            </form>
        </div>
    )
}

export default UpdateProduct