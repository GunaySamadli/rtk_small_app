import React from 'react';
import { useDeleteProductMutation } from '../store';
import { GoTrashcan } from 'react-icons/go'
import { BsPencilFill } from "react-icons/bs";
import Button from './Button';

const ProductListItem = ({ product }) => {


  const [removeProduct] = useDeleteProductMutation();

  const handleRemoveProduct = () => {
    removeProduct(product)
  }

  const handleEditProduct = () => {
  }

  return (
    <div className='flex justify-between align-center border border-inherit p-1 my-1'>
      {product.name}
      {/* <Button className='mr-2' onClick={handleEditProduct}><BsPencilFill /></Button> */}
      <Button className='mr-2' onClick={handleRemoveProduct}><GoTrashcan /></Button>
    </div>
  )
}

export default ProductListItem