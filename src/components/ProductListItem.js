import React from 'react';
import { useDeleteProductMutation } from '../store';
import { GoTrashcan } from 'react-icons/go'
import { BsPencilFill } from "react-icons/bs";
import { useHistory } from 'react-router-dom';
import Button from './Button';
import ExpandablePanel from './ExpandedPanel';
import ColorList from './ColorList';

const ProductListItem = ({ product }) => {

  const history = useHistory();

  const [removeProduct] = useDeleteProductMutation();

  const handleRemoveProduct = () => {
    removeProduct(product)
  }

  const header = <>
    <div className='flex justify-between align-center border border-inherit p-1 my-1'>
      {product.name}
      <div className='flex'>
        <Button className='mx-4' onClick={() => history.push(`/updateProduct/${product.id}`)}><BsPencilFill /></Button>
        <Button className='mr-2' onClick={handleRemoveProduct}><GoTrashcan /></Button>
      </div>
    </div>
  </>
  
  return (
    <ExpandablePanel header={header}>
      <ColorList product={product} />
    </ExpandablePanel>
  )

}

export default ProductListItem