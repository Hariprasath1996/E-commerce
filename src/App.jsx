
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import{Root,Home} from"./components/routes/root"
import { ShopProducts } from "./components/routes/Shopnow";

const router = createBrowserRouter([
    {path: "/",
    element: <Root/>,  
    children:[
    {
      path:"/Shop",
      element:<ShopProducts/>,
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

