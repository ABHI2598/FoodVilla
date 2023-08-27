import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {IMG_ID} from "../constants";
import { addItem, clearItem, removeItem } from '../Utils/cartSlice';

const MenuCards = ({item}) => {

  

   const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();
   const handleAddItem = (item)=>{
       dispatch(addItem(item));
       console.log(item);
   }

   const handleRemove = (item)=>{
    dispatch(removeItem(item));
    console.log(item);
    }

  return (
   <>  
       <div className='relative border-b-2 border-solid max-w-3xl mb-4 pb-10'>
       <div className='max-w-sm pb-4'>
       <li className='font-medium text-lg mt-1'>{item.name}</li>
       <li className='font-normal text-sm mt-1'>{"₹ " + (item.price/100) }</li>
       <li className='text-gray-400 text-sm leading-relaxed mt-2'>{item.description}</li>
       </div>

        <div className='absolute top-1 left-[650px] right-0 bottom-0'>
            <img src={IMG_ID + item.cloudinaryImageId} className="w-28 h-24 max-w-xs rounded-md" alt='No Image'/>
        </div>

        <div className='absolute top-20 bottom-0 left-[668px] right-0'>
           { isAdded ? <button onClick={()=> {setIsAdded(false); handleRemove(item)}}className='w-20 p-1 border border-green-400 bg-white text-green-500 font-semibold shadow-slate-500 hover:shadow-slate-600'>Remove</button>
             : <button data-testid="addBtn" onClick={()=>{ setIsAdded(true); handleAddItem(item)}} className='w-20 p-1 border border-green-400 bg-white text-green-500 font-semibold shadow-slate-500 hover:shadow-slate-600'>ADD</button>
           }
           
        </div>
       </div>
       
   </>
  )
}

export default MenuCards;