const Catagories = () => {
    return ( <main className="w-screen h-auto flex items-center justify-around border-8 border-white-500/100 ... gap-2 p-2 text-red-900 text-xl font-bold"  >
    <div className="Hunting & shooting">
      <img className="  hover:scale-105 shadow-lg contrast-50 ... hover:contrast-100" src="./src/images/shooting-bg.jpg" alt="#" />
      <p className="text-slate-400 hover:text-black  ">HUNTING & SHOOTING</p>
    
    </div>
  
    <div >
      <img className=" hover:scale-105 shadow-lg contrast-50 ... hover:contrast-100 overflow-hidden z-999 " src="./src/images/industrial-bg.jpg" alt="" />
      <p className="text-slate-400  hover:text-black">INDUSTRIAL & MANUFACTURING</p>
    
      
    </div>
  
    <div>
     <img className=" hover:scale-105 shadow-lg contrast-50 ... hover:contrast-100" src="./src/images/music-bg.jpg" alt="" />
    <p className="text-slate-400  hover:text-black">HEAD PHONES</p>
    
    </div>
  
    <div>
     <img className=" hover:scale-105 shadow-lg contrast-50 ... hover:contrast-100" src="./src/images/home-ps-31.jpg" alt="" />
    <p className="text-slate-400 hover:text-black">PUBLIC SAFETY & SECURITY</p>
  
    </div>
  
    <div>
       <img className=" hover:scale-105 shadow-lg contrast-50 ... hover:contrast-100" src="./src/images/home-health-img.jpg" alt="" />
    <p className="text-slate-400 hover:text-black">HEALTHY & SAFETY</p>
    
    </div>
  </main> );
}

export default Catagories;