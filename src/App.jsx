import Navbar  from "./components/routes/Navbar";
import Header from "./components/routes/Header";
import Catagories from "./components/routes/Catagories";
import Customs from "./components/routes/Customs";
import Systems from "./components/routes/Systems";
import Footer from "./components/routes/Footer"; 
import Products from "./components/routes/HOME";
import { Route, Routes } from "react-router-dom";
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




// const App = () => {
//   return ( 
//     <>
//     <Navbar/>
//     <Header/>
//     <Catagories/>
//     <Customs/>
//     <Systems/>
//     <Footer/>
//     </>
// );
// }

// export default App;
function App() {
  // const [cart, setCart] = useState([]);
  // const [filterProducts, setFilterProducts] = useState([]);

  // const UserContext = createContext();
  // console.log(filterProducts)

  // const [allData, setAllData] = useState([...data]);

  // const addToCart = (item) => {
  //   const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  //   if (existingItem) {
  //     const updatedCart = cart.map((cartItem) =>
  //       cartItem.id === item.id
  //         ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //         : cartItem
  //     );

  //     setCart(updatedCart);
  //   } else {
  //     setCart([...cart, { ...item, quantity: 1 }]);
  //   }
  // };
  

  return (
    <div className="">
    <Navbar/>
    <Header/>
    <Catagories/>
    <Customs/>
    
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/ABOUT" element={<h1>hi</h1>} />
        <Route path="/CONTACT" element={<h1>hello</h1>} />
      </Routes>
      <Systems/>
      <Footer/>
    </div>
  );
}

export default App;

