import React, { lazy, Suspense, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
//import About from "./Components/About";
import Error from "./Components/Error";
import {createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import Contact from "./Components/Contact";
import ResturantMenu  from "./Components/ResturantMenu";
import Profile from "./Components/Profile";
import Shimmers from "./Components/Shimmers";
import UserContext from "./Context/UserContext";
import ThemeContext from "./Context/ThemeContext";
import { lightTheme } from "./Utils/helper";
import { Provider } from "react-redux";
import store from "./Utils/store";
import Cart from "./Components/cart";
//import Instamart from "./Components/Instamart";

const About = lazy(()=> import("./Components/About"));
const Instamart = lazy(()=> import("./Components/Instamart"));

const App = () => {
    const [user,setUser] = useState({
        name:"Abhinav Pandey",
        email:"flukeantra25@gmail.com"
    })

    const theme = useState("light");

    return(
         <>
        <Provider store={store}>

      
         <UserContext.Provider value={
            {
                user:user
            }
         }>
         <Header/>
         <Outlet />
         <Footer />
         </UserContext.Provider>
         </Provider>
         </>
    );
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path:"/",
                element: <Body/>,
                
            },
            {
                path : "/about",
                element : <Suspense>
                     <About/>
                </Suspense>,
                children:[
                    {
                        path: "profile" , //don't put slash here as it is child of child
                        element: <Profile/>
                    }
                ],
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/resturants/:id",
                element: <ResturantMenu/>
            },
            {
                path:"/instamart",
                element:
                    <Suspense fallback={<Shimmers/>}>
                       <Instamart/>
                    </Suspense>
                
            },
            {
                path:"/cart",
                element: <Cart/>,
                errorElement: <Error/>
            }

        ]
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);