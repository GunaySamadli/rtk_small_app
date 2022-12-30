import React from 'react';
import { useDeleteColorMutation } from '../store';
import { GoTrashcan } from 'react-icons/go'
import Button from './Button';

const ColorListItem = ({ color }) => {

  const [removeColor,results] = useDeleteColorMutation();

  const handleRemoveColor = () => {
    removeColor(color)
  }

  return (
    <div className='flex justify-between align-center border border-inherit p-1 my-1'>

      <div style={{ backgroundColor: color.name, borderRadius: '50%', width: '50px', height: '50px' }}></div>
      <div className='flex'>
        <Button className='mr-2' loading={results.isLoading} onClick={handleRemoveColor}><GoTrashcan /></Button>
      </div>
    </div>
  )
}

export default ColorListItem