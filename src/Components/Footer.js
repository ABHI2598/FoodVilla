import React, { useContext } from "react";
import UserContext from "../Context/UserContext";


const Footer =()=>{
    const {user} = useContext(UserContext);
    return(
       <div className="p-20 bg-black">
       <div className="flex justify-center text-white">
       <span>This Website is Made by </span> 
           <h1 className="font-bold pl-2 text-blue-700" >{user.name} - {user.email} </h1>
       </div>
          
       </div>
    );
}


export default Footer;