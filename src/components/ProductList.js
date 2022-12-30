import React, { useState } from 'react'
import { useAddProductMutation, useFetchProductsQuery } from '../store'
import Button from './Button';
import ProductListItem from './ProductListItem';
import Spinner from './Spinner';


const ProductList = () => {

    const [products, setProducts] = useState('');

    const [addProduct, result] = useAddProductMutation();

    const { data, error, isLoading } = useFetchProductsQuery();


    const handleChange = (e) => {
        const { value, name } = e.target;
        setProducts({ ...products, [name]: value })
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        addProduct(products);
    }

    let content;
    if (isLoading) {
        content = <Spinner />
    } else if (error) {
        content = <div>Error...........</div>
    } else {
        content = data.map((product) => (
            <ProductListItem key={product.id} product={product} />
        ))
    }

    return (
        <div className='m-2'>
            <form onSubmit={handleAddProduct} className='m-2 flex flex-row items-center'>
                <input className='border border-inherit p-1 mx-2' onChange={handleChange} name='name' type="text" placeholder='Enter Product Name' />
                <Button loading={result.isLoading} type='submit'>Add Product</Button>
            </form>
            <div>
                {content}
            </div>
        </div>
    )
}

export default ProductList