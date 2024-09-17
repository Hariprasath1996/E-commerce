import {Navbar} from "./components/routes/Navbar"

import React from "react";
// import { Route } from "react-router-dom";
import Home from "./components/routes/Home.main";
  
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Footer } from "./components/routes/Footer";
import { AboutPage } from "./components/routes/About";


const App = () => {
  return (
  <>
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<AboutPage />} />
  </Routes>
  <Footer />
</BrowserRouter>

  </>
  );
}

export default App;


