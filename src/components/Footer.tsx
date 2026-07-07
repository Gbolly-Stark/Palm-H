const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 pt-16 sm:pt-20 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Palm <span className="text-cyan-400">Horizon</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Experience world-class hospitality, breathtaking ocean views, and
            unforgettable luxury at Palm Horizon Resort.
          </p>
        </div>


        <div>
          <h3 className="text-white text-xl sm:text-2xl font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-4 mt-6 text-gray-400">

            <li className="hover:text-cyan-400 transition cursor-pointer">
              Home
            </li>

            <li className="hover:text-cyan-400 transition cursor-pointer">
              About
            </li>

            <li className="hover:text-cyan-400 transition cursor-pointer">
              Rooms
            </li>

            <li className="hover:text-cyan-400 transition cursor-pointer">
              Amenities
            </li>

            <li className="hover:text-cyan-400 transition cursor-pointer">
              Contact
            </li>

          </ul>
        </div>


        <div>
          <h3 className="text-white text-xl sm:text-2xl font-semibold">
            Contact
          </h3>

          <div className="space-y-4 mt-6 text-gray-400">

            <p className="hover:text-cyan-400 transition">
              123 Ocean Drive
            </p>

            <p className="hover:text-cyan-400 transition">
              Malibu, California
            </p>

            <p className="hover:text-cyan-400 transition">
              +1 (123) 456-7890
            </p>

            <p className="hover:text-cyan-400 transition">
              info@palmhorizon.com
            </p>

          </div>
        </div>


        <div>

          <h3 className="text-white text-xl sm:text-2xl font-semibold">
            Newsletter
          </h3>

          <p className="text-gray-400 mt-6 leading-7">
            Subscribe to receive exclusive offers, resort updates, and travel
            inspiration.
          </p>


          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-6 bg-white/10 border border-cyan-400/20 rounded-full px-5 py-3 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 transition"
          />


          <button
            className="w-full mt-4 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition duration-300 hover:scale-105"
          >
            Subscribe
          </button>

        </div>

      </div>


      <div className="border-t border-cyan-500/20 mt-16 py-6">

        <p className="text-center text-gray-500 text-sm sm:text-base">
          © 2026 Palm Horizon Resort. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;