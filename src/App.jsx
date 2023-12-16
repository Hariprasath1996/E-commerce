import Navbar from "./components/Nav";
import Header from "./components/Header";
import Catagories from "./components/catagories";
import AboutOne from "./components/AboutOne";
import AboutTwo from "./components/AboutTwo";
import Footer from "./components/Footer";





// import react router dom here below


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

// const AppOne = () => {
//   return (   <RouterProvider router={router} />  );
// }

// export { AppOne} ;




const App = () => {
  return ( 
    <>
    <Navbar/>
    <Header/>
    <Catagories/>
    <AboutOne/>
    <AboutTwo/>
    <Footer/>
    
    </>
);
}

export default App;

