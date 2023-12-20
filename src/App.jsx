import Navbar  from "./components/routes/Navbar";
import Header from "./components/routes/Header";
import Catagories from "./components/routes/Catagories";
import Customs from "./components/routes/Customs";
import Systems from "./components/routes/Systems";
import Footer from "./components/routes/Footer"; 
import { Route, Routes } from "react-router-dom";
import ShopProducts from "./components/routes/Shopnow";
import Faq from "./components/routes/Faq"

function App() {


  return (
    <div className=" overflow-x-hidden ">
    <Navbar/>
    <Header/>
    <Routes>
        <Route path="/"  element={<h1></h1>} />
        <Route path="/shop" element={<ShopProducts/>} />
        <Route path="/ABOUT" element={<h1 ></h1>} />
        <Route path="/CONTACT" element={<h1></h1>} />
      </Routes>
    <Catagories/>
    <Customs/>
      
      <Systems/>
      <Footer/>
    < Routes>
    <Route path="/faq"  element={<Faq/>} />
    </Routes>

    </div>
  );
}

export default App;
