import { useState , useEffect} from "react";


const useResturantList =()=>{

    const [allResturants , setAllResturants] = useState([]);
    useEffect(()=>{
        getResturants();
         
      },[]);
  
      async function getResturants()
      {
          const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&page_type=DESKTOP_WEB_LISTING');
          const json = await response.json();
          setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
          //setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      }
      
      return allResturants;
}


export default useResturantList;