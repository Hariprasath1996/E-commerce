import {Navbar} from "./components/routes/Navbar"
import React from "react";
import Home from "./components/routes/Home.main";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Footer } from "./components/routes/Footer";
import { AboutPage } from "./components/routes/About";
import {ContactPage}  from "./components/routes/Contact"
import { LoginPage } from "./components/routes/Login";
import {Shopnow} from "./components/routes/Shopnow";
import { Hunt } from "./components/routes/Hunting";
import {IndustryProducts} from "./components/routes/Industrial";
import { PolicyPage } from "./components/routes/PrivacyPolicy";
import { FaqProducts } from "./components/routes/Faq.route";
import { ServicePage } from "./components/routes/Service";
const App = () => {
  return (
  <>
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<AboutPage />} />
    <Route path="/Contact" element={<ContactPage />} />
    <Route path="/log-in" element={<LoginPage/>}/>
    <Route path="Shop" element={<Shopnow />}/>
    <Route path="/Hunting" element={<Hunt/>}/>
    <Route path="/industry" element={<IndustryProducts/>}/>
    <Route path="/privacy" element={<PolicyPage/>}/>
    <Route path="/faq" element={<FaqProducts/>}/>
    <Route path="/services" element={<ServicePage/>}/>
  </Routes>
  <Footer />
</BrowserRouter>

  </>
  );
}

export default App;


