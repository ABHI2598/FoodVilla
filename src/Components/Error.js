import React from "react";
import {useRouteError} from "react-router-dom";

const Error =()=>{
    const err = useRouteError();

    return(
      <>
        <h1>OOOOPSS!!!!!!!!!</h1>
        <h2>SOMETHING WENT WRONG!!!</h2>
        <h2>{err.status + " : " + err.statusText }</h2>
      </>
    );
}


export default Error;