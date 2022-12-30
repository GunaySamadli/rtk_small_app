import React, { useState } from 'react'
import { useAddColorMutation, useFetchColorsQuery } from '../store'
import Button from './Button';
import ColorListItem from './ColorListItem';
import Spinner from './Spinner';


const ColorList = ({ product }) => {


    const [addColor, result] = useAddColorMutation();

    const { data, error, isLoading } = useFetchColorsQuery(product);

    const handleAddColor = () => {
        addColor( product);
    }

    let content;
    if (isLoading) {
        content = <Spinner />
    } else if (error) {
        content = <div>Error...........</div>
    } else {
        content = data.map((color) => (
            <ColorListItem key={color.id} color={color} />
        ))
    }

    return (
        <div >
            <div className='m-2 flex flex-row items-center justify-between'>
                <h3 className='text-lg font-bold'>Colors for {product.name}</h3>
                <Button loading={result.isLoading} onClick={handleAddColor}>
                    Add Color
                </Button>
            </div>
            {content}
        </div>
    )
}

export default ColorList