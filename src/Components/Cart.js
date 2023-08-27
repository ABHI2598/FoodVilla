import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../Utils/cartSlice";
import {IMG_ID} from "../constants";


const Cart =()=>{

    const cartItems = useSelector(store => store.cart.items);
   
    const dispatch = useDispatch();
    const handleClearItem = ()=>{
        dispatch(clearItem());
    }

    const handleRemove = (item) =>{
        dispatch(removeItem(item));
    }
    
    return(
        <>
        
        <div className="flex justify-center py-10">
           
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
        </svg>
        <span className="inline font-bold text-xl"> My Cart </span>
        </div>
        
        <div className="ml-64">
        {cartItems.map(item => (
            <>
                <div className=" flex flex-wrap mb-1 max-w-lg bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div>
                        <img src={IMG_ID + item.cloudinaryImageId} className="w-28 h-24 max-w-xs rounded-md" alt='No Image'/>
                    </div>
                    <div className="font-medium text-lg ml-1 pl-2'">
                        {item.name}
                    </div>
                    <div className="mt-14 ml-8">
                    <button onClick={()=> {handleRemove(item)}}className='w-20 p-1 border border-blue-400 rounded-lg bg bg-green text-black font-semibold shadow-slate-500 hover:shadow-slate-600'>Remove</button>
                    </div>
                </div>
            </>
        ))}
        </div>

        <div className="flex justify-center pb-10">
        <button onClick={()=>{ handleClearItem()}} className='w-48 p-1 border border-green-400 bg-white text-green-500 font-semibold shadow-slate-500 hover:shadow-slate-600'>Clear Cart</button>
        </div>
       
        
 
       
     
        </>
    )
}


export default Cart;