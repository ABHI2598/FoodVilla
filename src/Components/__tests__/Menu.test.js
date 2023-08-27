import { fireEvent, render, waitFor , act } from "@testing-library/react"
import {StaticRouter} from "react-router-dom/server"
import { Provider } from "react-redux"
import store from "../../Utils/store"
import RestaurantMenu from "../ResturantMenu";
import Header from "../Header";
import { MENU } from "../../mocks/Menu";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MENU);
        }
    })
})

test("Menu should be loaded ", async ()=>{

    const body = render(
        <StaticRouter>
            <Provider store={store}>
            <Header />
            <RestaurantMenu />
            </Provider>
        </StaticRouter>
    )
   
    await waitFor(() => expect(body.getByTestId("menu")));

    const addBtn = body.getAllByTestId("addBtn");
    
    act(()=>{
        fireEvent.click(addBtn[0]);
    })
    

    const cart = body.getByTestId("cart");

   
    //console.log(cart);
    expect(cart.innerHTML).toBe("3");

    //expect(shimmer.children.length).toBe(20);
  
});