import React from "react";
import { Outlet } from "react-router";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";


// class About extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.setState ={
//             userName: "Abhi"
//         }
//         console.log("Parent - ocnstructor");
//     }

//     componentDidMount(){
//         console.log("Parent componentDidMount");
//     }

//     componentDidUpdate(){
//         console.log("Parent componentDidUpdate");
//     }

//     componentWillUnmount(){
        
//         console.log("parent component unmounted");
//     }
//     render()
//     {
//         console.log("Parent-render");
//         return(
//             <>
//               <h1>ABOUT US PAGE</h1>
//                 <h3>HEY,WELCOME TO REACT JS COURSE.............</h3>

//                {/* <ProfileClass name={"Abhinav Pandey"} xyz="abc"/>   */}

//                <Profile COdingProfile="The Seer Programmer" />
//             </>
//         )
//     }
// }

const About =()=>{
    return(
       <>
        <h1>ABOUT US PAGE</h1>
        <h3>HEY,WELCOME TO REACT JS COURSE.............</h3>

        <Profile COdingProfile="The Seer Programmer" />
       </>
    );
}


export default About;



/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */