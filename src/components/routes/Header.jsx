import { Outlet } from "react-router-dom";
const Header = () => {
    return ( 
    <main className="   bg-gradient-to-r from-indigo-500 ... z-10 ... no-repeat  w-screen h-[40rem] p-[2rem]  flex flex-row
    items-start justify-between"  >
<div className="flex flex-col justify-center items-start gap-[2rem]">
<img className="w-[70rem] relative bottom-6" src="./src/images/sounds-season-logo.png" alt="sound-season "  />
<p className="text-white text-3xl font-bold w-[30rem] h-[6rem] relative left-[12rem]  bottom-14 leading-[2.5rem]  " >SAVE BIG ON SELECT HEARING PROTECTION PRODUCTS!</p>
</div>
<div>
<img className=" h-[40rem] relative bottom-8 contrast-100 ... " src="./src/images/Hunting-image.jpg" alt="" /> 
</div>
<Outlet/>
    </main>
    );
}

export  {Header} ;