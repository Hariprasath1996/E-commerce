import Header from "./components/routes/Header";
import Catagories from "./components/routes/Catagories";
import Customs from "./components/routes/Customs";
import Systems from "./components/routes/Systems";
import Footer from "./components/routes/Footer"; 

const HomePage = () => {
    return ( 
        <>
        <Header/>
        <Catagories/>
        <Customs/>
        <Systems/>
        <Footer/>
        
        </>
    );
}

export default HomePage;