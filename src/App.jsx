import Navbar from "./components/Nav";
import Front from "./components/Front";
import Catagories from "./components/catagories";
import Video from "./components/video";
import ReferenceOne from "./components/ReferenceOne";
import ReferenceTwo from "./components/ReferenceTwo";
import Footer from "./components/Footer";
// import dataUrl from "./components/Url";


const App = () => {
  return ( 
    <>
    <Navbar/>
    <Front/>
    <Catagories/>
    <Video/>
    <ReferenceOne/>
    <ReferenceTwo/>
    <Footer/>
    {/* <dataUrl/> */}
    </>
);
}

export default App;

