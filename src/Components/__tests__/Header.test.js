import { render } from "@testing-library/react"
import {StaticRouter} from "react-router-dom/server"
import { Provider } from "react-redux"
import store from "../../Utils/store"
import Header from "../Header"


test("Logo should be loaded ",()=>{

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                 <Header/>
            </Provider>
        </StaticRouter>
    )
   
    const logo = header.getAllByTestId("logo");

    //console.log(logo);

    expect(logo[0].src).toBe("http://localhost/dummy.png");
  
});


test("Is Online or not",()=>{

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                 <Header/>
            </Provider>
        </StaticRouter>
    )
   
    const online = header.getByTestId("online-status");

   
    //console.log(online);
    expect(online.innerHTML).toBe("✅");
  
});


test("Check whether cart is zero items or not",()=>{

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                 <Header/>
            </Provider>
        </StaticRouter>
    )
   
    const cart = header.getByTestId("cart");

   
    //console.log(cart);
    expect(cart.innerHTML).toBe("2");
  
});



