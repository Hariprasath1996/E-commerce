
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import{Root,Home} from"./components/routes/root"
import { ShopProducts } from "./components/routes/Shopnow";
import {FaqProducts} from "./components/routes/Faq.route"

const router = createBrowserRouter([
    {path: "/",
    element: <Root/>,  
    children:[
    {
      path:"/Shop",
      element:<ShopProducts/>,
    },
    {
      path:"/faq",
      element:<FaqProducts/>,
    }

    ]   
  },
  {
    path: "/Home",
    element:<Home/>},
]);

const app=()=>{
  return (
    
    <RouterProvider router={router} />
  )
}
export default app;

