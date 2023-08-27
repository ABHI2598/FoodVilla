import { fireEvent, render, waitFor , act } from "@testing-library/react"
import {StaticRouter} from "react-router-dom/server"
import { Provider } from "react-redux"
import store from "../../Utils/store"
import Body from "../Body";
import { RESTURANT_DATA } from "../../mocks/ResturantData";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(RESTURANT_DATA);
        }
    })
})

test("Shimmer should be loaded ",()=>{

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                 <Body/>
            </Provider>
        </StaticRouter>
    )
   
    const shimmer = body.getByTestId("shimmer");

    //console.log(shimmer);

    expect(shimmer.children.length).toBe(20);
  
});



test("Resturant list should be loaded ", async ()=>{

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                 <Body/>
            </Provider>
        </StaticRouter>
    )
   
    await waitFor(()=> expect(body.getByTestId("search-btn")));


    const resList = body.getByTestId("res-list");

    //console.log(resList);

    expect(resList.children.length).toBe(15);
  
});


test("Searching  list should be loaded ", async ()=>{

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                 <Body/>
            </Provider>
        </StaticRouter>
    )
   
    await waitFor(()=> expect(body.getByTestId("search-btn")));

   
    const input  = body.getByTestId("search-input");

    act(()=>{
        fireEvent.change(input,{
            target:{
                value: "sandwich"
            }
        })
    })
   

    const search = body.getByTestId("search-btn");

    act(() =>{
        fireEvent.click(search);
    })
   

    const resList = body.getByTestId("res-list");

    //console.log(resList);

    expect(resList.children.length).toBe(1);
  
});