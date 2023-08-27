import React from "react";


const Shimmers = () =>{
    return(
       <>
       <div className="flex justify-center relative py-6">
       <div className="w-[500px] p-6 pl-10 text-sm bg-gray-50 " />
       </div>
         <div data-testid= "shimmer" className="grid grid-cols-4 space-x-2">
           {Array(20).fill("").map((e,i) => (<div className=" relative h-52 w-72 mb-4 bg-slate-200  shadow dark:bg-gray-800 dark:border-gray-700" key = {i} />))}

         </div>
       </>
    );
}


export default Shimmers;