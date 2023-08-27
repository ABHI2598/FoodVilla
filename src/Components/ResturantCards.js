
import { useContext } from "react";
import {IMG_ID} from "../constants";
import UserContext from "../Context/UserContext";

const ResturantCards = ({name,cuisines,cloudinaryImageId,slaString,avgRating})=>{
    const {user} = useContext(UserContext);
    return(
       <div className="relative max-w-xs mb-6 border rounded-xl shadow-lg bg-white overflow-hidden" >
            <div className="rounded-tr-xl">
            <img src={IMG_ID + cloudinaryImageId} alt="No Image" className="p-4" />
            </div>
            
            <h2 className="overflow-hidden font-bold break-words mt-2 ml-2">{name}</h2>
            
            <h4 className="mt-1 mb-2 font-medium text-sm text-slate-800 ml-2">{cuisines[0]}</h4>
            <div className=" absolute border w-14 bg-green-600  p-1 text-white ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-4 h-4">
            <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /> </svg>
           
            <h4 className=" absolute bottom-0.5 left-6">
            {avgRating}</h4>
            </div>
    
            <h5 className="font-semibold text-sm pt-2 pb-4 mt-8 ml-2"> • {slaString}</h5>
           {/* <h5 className="font-semibold text-sm  pb-4  ml-2">{user.name}</h5> */}
       </div>
    );
}

export default ResturantCards;