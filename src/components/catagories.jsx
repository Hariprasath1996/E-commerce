import { GiTargetShot } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { ImMusic } from "react-icons/im";
import { MdSecurity } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";


const Catagories = () => {
    return ( <main className="w-screen h-auto flex items-center justify-around border-8 border-white-500/100 ... gap-2 p-2 text-red-900 text-xl font-bold"  >
    <div className="Hunting & shooting">
      <a href=""> <img className=" contrast-50 ... hover:contrast-100" src="./src/images/shooting-bg.jpg" alt="#" />
      <p className="text-slate-400 hover:text-black ">HUNTING & SHOOTING</p>
      <GiTargetShot className="absolute bottom-20  text-orange-300 text-4xl  " /></a>
    </div>
  
    <div >
      <a href=""><img className=" contrast-50 ... hover:contrast-100" src="./src/images/industrial-bg.jpg" alt="" />
      <p className="text-slate-400  hover:text-black">INDUSTRIAL & MANUFACTURING</p>
      <IoSettings className="absolute bottom-20  text-orange-300 text-4xl " />
      </a>
    </div>
  
    <div>
      <a href=""><img className=" contrast-50 ... hover:contrast-100" src="./src/images/music-bg.jpg" alt="" />
    <p className="text-slate-400  hover:text-black">HEAD PHONES</p></a>
    <ImMusic className="absolute bottom-20  text-orange-300 text-4xl " />
    </div>
  
    <div>
      <a href=""><img className=" contrast-50 ... hover:contrast-100" src="./src/images/home-ps-31.jpg" alt="" />
    <p className="text-slate-400 hover:text-black">PUBLIC SAFETY & SECURITY</p>
    <MdSecurity className="absolute bottom-20   text-orange-300 text-4xl " /></a>
    </div>
  
    <div>
      <a href=""> <img className=" contrast-50 ... hover:contrast-100" src="./src/images/home-health-img.jpg" alt="" />
    <p className="text-slate-400 hover:text-black">HEALTHY & SAFETY</p>
    <TbActivityHeartbeat className="absolute bottom-20 text-orange-300 text-4xl  " /></a>
    </div>
  </main> );
}

export default Catagories;