import Navbar  from "./components/routes/Navbar";
import Header from "./components/routes/Header";
import Catagories from "./components/routes/Catagories";
import Customs from "./components/routes/Customs";
import Systems from "./components/routes/Systems";
import Footer from "./components/routes/Footer"; 
// import Root from "./components/routes";
// // import react router dom here below
// import {createBrowserRouter,RouterProvider,} from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root/>,
//     children : [
//       {
//       path:"/ALL-PRODUCTS",
//       element:<Navbar/>,
//     },
//       {
//         path:"/HUNTING",
//         element:<Navbar/>,
//       },
//       {
//         path:"/INDUSTRIAL",
//         element:<Navbar/>,
//       },
//       {
//         path:"/MUSIC",
//         element:<Navbar/>,
//       },
//       {
//         path:"/SECURITY",
//         element:<Navbar/>,
//       },
//       {
//         path:"/SAFETY",
//         element:<Navbar/>,
//       }
//     ]
//   },
// ]);

// const routing = () => {
//   return (   <RouterProvider router={router} />  );
// }

// export { routing} ; 




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

