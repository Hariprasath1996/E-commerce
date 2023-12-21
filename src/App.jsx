
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import{Root,Home} from"./components/routes/root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
    

      
    ]
  },
]);

const app=()=>{
  return (
    
    <RouterProvider router={router} />
  )
}
export default app;

