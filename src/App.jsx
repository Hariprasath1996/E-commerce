
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import{Root,Home} from"./constants/root"
import { ShopProducts } from "./components/routes/Shopnow";
import {FaqProducts} from "./components/routes/Faq.route"
import {LoginPage} from "./components/routes/Login"
import {AboutPage} from "./components/routes/About"
import {ContactPage} from "./components/routes/Contact"
import { PolicyPage } from "./components/routes/PrivacyPolicy";
import { ServicePage } from "./components/routes/Service";
import { Hunt } from "./components/routes/Hunting";
import { IndustryProducts } from "./components/routes/Industrial";
// import Cart from "./components/routes/cart";



const router = createBrowserRouter([
    {path: "/",
    element: <Root/>,  
    errorElement: <ErrorPage />,
    
    children:[
      {
        path: "/Home",
        element:<Home/>,
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
},
{
  path:"/CONTACT",
  element:<ContactPage/>,
},
{
  path:"/privacy",
  element:<PolicyPage/>,
},
{
  path:"/services",
  element:<ServicePage/>,
},
{
  path:"/Hunting",
  element:<Hunt/>,
},
{
  path:"/Industry",
  element:<IndustryProducts/>,
},



    ]   
    


    
  },


]);

const app=()=>{
  return (
    
    <RouterProvider router={router} />
  )
}
export default app;

