import React from "react";
import { useState, useEffect } from 'react';
import {RES_MENU_URL} from "./helper";



const useResturant = (resId)=>
{
    const [resturantMenu, setResturantMenu] = useState();
           
    useEffect(()=>{
        getResturantMenuInfo();
    },[])

    async function getResturantMenuInfo()
    {
        const response = await fetch(RES_MENU_URL + resId);
        const jsonData = await response.json();
        console.log(jsonData);
        setResturantMenu(jsonData?.data);
    }

    return resturantMenu;

}

export default useResturant;