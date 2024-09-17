import { NavLink } from "react-router-dom";

const Catagories = () => {
  return (
    <main className="w-screen h-auto flex flex-wrap items-center justify-around gap-4 p-4 bg-white">
      {/* Hunting & Shooting */}
      <div className="flex flex-col items-center">
        <NavLink to="/Hunting">
          <img
            className="w-64 h-64 object-cover hover:scale-105 transition-transform duration-300 shadow-lg contrast-50 hover:contrast-100 hover:cursor-pointer"
            src="./src/images/shooting-bg.jpg"
            alt="Hunting & Shooting"
          />
          <p className="text-slate-400 hover:text-black mt-2 text-center font-semibold">
            HUNTING & SHOOTING
          </p>
        </NavLink>
      </div>

      {/* Industry */}
      <div className="flex flex-col items-center">
        <NavLink to="/Industry">
          <img
            className="w-64 h-64 object-cover hover:scale-105 transition-transform duration-300 shadow-lg contrast-50 hover:contrast-100 hover:cursor-pointer"
            src="./src/images/industrial-bg.jpg"
            alt="Industry"
          />
          <p className="text-slate-400 hover:text-black mt-2 text-center font-semibold">
            INDUSTRY
          </p>
        </NavLink>
      </div>

      {/* Headphones */}
      <div className="flex flex-col items-center">
        <NavLink to="/Headphones">
          <img
            className="w-64 h-64 object-cover hover:scale-105 transition-transform duration-300 shadow-lg contrast-50 hover:contrast-100 hover:cursor-pointer"
            src="./src/images/music-bg.jpg"
            alt="Headphones"
          />
          <p className="text-slate-400 hover:text-black mt-2 text-center font-semibold">
            HEADPHONES
          </p>
        </NavLink>
      </div>

      {/* Public Safety & Security */}
      <div className="flex flex-col items-center">
        <NavLink to="/PublicSafety">
          <img
            className="w-64 h-64 object-cover hover:scale-105 transition-transform duration-300 shadow-lg contrast-50 hover:contrast-100 hover:cursor-pointer"
            src="./src/images/home-ps-31.jpg"
            alt="Public Safety & Security"
          />
          <p className="text-slate-400 hover:text-black mt-2 text-center font-semibold">
            PUBLIC SAFETY & SECURITY
          </p>
        </NavLink>
      </div>

      {/* Healthy & Safety */}
      <div className="flex flex-col items-center">
        <NavLink to="/HealthSafety">
          <img
            className="w-64 h-64 object-cover hover:scale-105 transition-transform duration-300 shadow-lg contrast-50 hover:contrast-100 hover:cursor-pointer"
            src="./src/images/home-health-img.jpg"
            alt="Healthy & Safety"
          />
          <p className="text-slate-400 hover:text-black mt-2 text-center font-semibold">
            HEALTH & SAFETY
          </p>
        </NavLink>
      </div>
    </main>
  );
};

export { Catagories };
