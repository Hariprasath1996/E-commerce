
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import{Root,Home} from"./constants/root"
import { ShopProducts } from "./components/routes/Shopnow";
import {FaqProducts} from "./components/routes/Faq.route"
import {LoginPage} from "./components/routes/Login"
import {AboutPage} from "./components/routes/About"

const router = createBrowserRouter([
    {path: "/",
    element: <Root/>,  
    
    children:[
      {
        path: "/Home",
        element:<Home/>
      },
{
    path:"/Shop",
    element:<ShopProducts/>,
},
{
    path:"/faq",
    element:<FaqProducts/>,
},
{
  path:"/Login",
  element:<LoginPage/>,
},
{
  path:"/ABOUT",
  element:<AboutPage/>,
}



    ]   


    
  },


]);

const app=()=>{
  return (
    
    <RouterProvider router={router} />
  )
}
export default app;

