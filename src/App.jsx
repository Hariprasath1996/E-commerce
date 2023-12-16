import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Catagories from "./components/catagories";
import Customs from "./components/Customs";
import Systems from "./components/Systems";
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
    <Customs/>
    <Systems/>
    <Footer/>
    </>
);
}

export default App;

