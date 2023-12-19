import Navbar  from "./components/routes/Navbar";
import Header from "./components/routes/Header";
import Catagories from "./components/routes/Catagories";
import Customs from "./components/routes/Customs";
import Systems from "./components/routes/Systems";
import Footer from "./components/routes/Footer"; 
import Products from "./components/routes/Home.root.route";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/routes/Shopnow";

function App() {

  return (
    <div className=" overflow-x-hidden ">
    <Navbar/>
    <Header/>
    <Catagories/>
    <Customs/>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/shop" element={<AllProducts/>} />
        <Route path="/ABOUT" element={<h1>hi</h1>} />
        <Route path="/CONTACT" element={<h1>hello</h1>} />
      </Routes>
      <Systems/>
      <Footer/>
    </div>
  );
}

export default App;

