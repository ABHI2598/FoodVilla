import React, {useContext} from "react";
import images from "../../Images/foodvilla.png";
import {Link} from "react-router-dom";
import useOnline from "../Utils/useOnline";
import UserContext from "../Context/UserContext";
import { useSelector } from "react-redux";



const Title = () =>{
    return(
       <a href="">
       <img data-testid="logo" className = "h-24 pr-2" src={images} alt="No Image"/>
       </a>
    );
}

const Header =() =>{
   const isOnline = useOnline();
   const {user} =  useContext(UserContext);
       
   const cartItems = useSelector((store) => store.cart.items)
   //console.log(cartItems);

    return(
      <>

       <div className="flex justify-between bg-slate-50 shadow-md ">
          <Title/>
        <div>
          <ul className="flex py-8 items-center">
           <Link to="/" >
            <li className="px-2 hover:text-blue-500 hover:font-bold">Home</li>  
            </Link>
            <Link to="/about" >
                  <li className="px-2 hover:text-blue-500 hover:font-bold">About Us</li>
            </Link>
            <Link to="/contact" >
            <li className="px-2 hover:text-blue-500 hover:font-bold">Contact Us</li>
            </Link>

            <Link to="/instamart" >
            <li className="px-2 hover:text-blue-500 hover:font-bold">Instamart</li>
            </Link>

            <Link to="/cart" >
            <li className="px-4 hover:text-blue-500 hover:font-bold">Cart 
            <span data-testid="cart" className=" px-2 text-lg font-semibold text-left text-black-700">{cartItems.length}</span>
            </li>
            </Link>
          
            
          </ul>
        
          </div>
          
          <div  className="flex items-center">
          <span className="px-8">{user.name}</span>
      


          <h1 data-testid="online-status" className="px-2">{isOnline ? "✅" : "🔴"}</h1>
          </div>
         
          
       </div>
       </>
    );
}


export default Header;