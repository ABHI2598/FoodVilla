import { useState, useEffect } from "react";
import {USER_INFO_URL} from "../Utils/helper";

const useUserInfo = ()=>{
    const [userInfo,setUserInfo] = useState({});

    useEffect(()=>{
     getUserInfo();
    },[])
      
 
   async function getUserInfo(){
     const data = await fetch(USER_INFO_URL);
     const json = await data.json();
     setUserInfo(json);
   }


   return userInfo;
}



export default useUserInfo;