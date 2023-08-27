import React from 'react'
import {useParams} from 'react-router-dom';
import {IMG_ID} from "../constants";
import Shimmers from './Shimmers';
import useResturant from "../Utils/useResturant"
import MenuCards from './MenuCards';
import { useSelector } from "react-redux";

const ResturantMenu = () => {
    const {id} = useParams();
    const resturantMenu = useResturant(id);
    const cartItems = useSelector((store) => store.cart.items)
   console.log(cartItems);
    
    if(!resturantMenu) return <Shimmers/>
  return (
    <>
        <div className='p-4 bg-black flex'>
             
             <img src={IMG_ID + resturantMenu?.cloudinaryImageId}  className="ml-12 w-64 h-44"/>
             <div className='m-6 font-sans'>

             <h1 className=' text-white font-semibold text-4xl'> {resturantMenu?.name}</h1>
            <h3 className='text-gray-300 mt-2'>{resturantMenu?.cuisines.join(", ")}</h3>
            <h4 className='text-gray-300 mt-2'>{resturantMenu?.locality + " , " + resturantMenu?.area}</h4>
          
           <div className='mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="relative inline w-4 h-4"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
            <h5 className='text-gray-300 absolute top-[250px] inline'> {resturantMenu?.avgRating }</h5>
            <h5 className='text-gray-300 text-xs mt-1 font-sans'>{resturantMenu?.totalRatingsString}</h5>
            </div>
             </div>
          
          </div>
            <div className='mt-6 ml-60'>
                 <h1 className='font-semibold text-2xl'>Recommended</h1>
                 <h2 className='font-medium text-sm'>{Object.values(resturantMenu?.menu?.items).length + " ITEMS"} </h2>

                 <ul data-testid="menu" className='mt-6 list-item'>
                 {Object.values(resturantMenu?.menu?.items).map((item) => (
                         <MenuCards item={item} key={item.id} />
                  ))}
                 </ul>
            </div>
       
    </>
  );
}


export default ResturantMenu;
