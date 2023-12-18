import Navbar  from "./components/routes";
import Header from "./components/routes";
import Catagories from "./components/routes";
import Customs from "./components/routes";
import Systems from "./components/routes";
import Footer from "./components/routes"; 
import Root from "./components/routes";
// import react router dom here below
import {createBrowserRouter,RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children : [
      {
      path:"/ALL-PRODUCTS",
      element:<Navbar/>,
    },
      {
        path:"/HUNTING",
        element:<Navbar/>,
      },
      {
        path:"/INDUSTRIAL",
        element:<Navbar/>,
      },
      {
        path:"/MUSIC",
        element:<Navbar/>,
      },
      {
        path:"/SECURITY",
        element:<Navbar/>,
      },
      {
        path:"/SAFETY",
        element:<Navbar/>,
      }
    ]
  },
]);

const routing = () => {
  return (   <RouterProvider router={router} />  );
}

export { routing} ; 




const App = () => {
  return ( 
    <>
    <Navbar/>
    <Header/>
    <Catagories/>
    <Customs/>
    <Systems/>
    <Footer/>
    </>
);
}

export default App;

