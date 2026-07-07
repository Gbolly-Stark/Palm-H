

const Navbar = () => {
  return (
  
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="flex items-center justify-between px-8 py-4 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl">

        
        <div className="flex items-center gap-3">
          <img
            src="/ChatGPT Image Jun 26, 2026, 11_43_01 PM.png"
            alt="Palm Horizon"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold text-white">
              Palm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Horizon
              </span>
            </h1>

            <p className="text-xs tracking-[0.3em] uppercase text-gray-300">
              Luxury Beach Resort
            </p>
          </div>
        </div>

        
        <ul className="hidden lg:flex items-center gap-10 text-white font-medium">
          {[
            "Home",
            "Stay",
            "Dining",
            "Experiences",
            "Gallery",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="relative transition duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        
        <button className="hidden lg:block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
          Reserve Now
        </button>

    
        <button className="lg:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
    
  );
};

export default Navbar;