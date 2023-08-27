import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResturantCards from "./ResturantCards";
import Shimmers from "./Shimmers";
import {filteredData, appTheme} from "../Utils/helper";
import ThemeContext from "../Context/ThemeContext";




const Body = () =>{
    const [allResturants , setAllResturants] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [searchText,setSearchText] = useState();

    useEffect(()=>{
      getResturants();
       
    },[]);

    async function getResturants()
    {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&page_type=DESKTOP_WEB_LISTING');
        const json = await response.json();
        setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    //if(allResturants.length == 0) return <Shimmers/>

    return(
        <React.Fragment>
         
          <div className="flex justify-center relative py-6 ">
              
              <div className="absolute inset-y-0 left-[510px] flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input data-testid="search-input" type="text" placeholder="Search" className="w-[500px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={searchText}
                onChange = {(e)=> setSearchText(e.target.value)}
              />
              <button  data-testid="search-btn"
               className="text-white absolute bg-blue-600 bottom-8 right-[520px] border border-gray-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                    const data = filteredData(searchText,allResturants);
                    setRestaurants(data);
                }}
              >Search</button>
          </div>
       
       <div data-testid="res-list" className="grid grid-cols-5 space-x-1 hover:shadow-gray-900">
               {restaurants.map((resturant) => {
                    return (<Link to={"/resturants/" + resturant?.data.id}  key={resturant?.data.id}>
                                <ResturantCards {...resturant.data} key={resturant.id} />
                            </Link>
                    )
                       
                })}
            
       </div>
       </React.Fragment>
    );
}

export default Body;