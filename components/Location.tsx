const Location = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 py-20 sm:py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="w-32 sm:w-40 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>

        <div className="text-center mt-6 mb-14">

          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-cyan-300 text-sm">
            Find Us
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
            Our Location
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-8">
            Nestled along the pristine shores of the Pacific Ocean, Palm Horizon
            Resort offers breathtaking scenery, luxurious accommodations, and an
            unforgettable coastal experience.
          </p>

        </div>


        <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl border border-cyan-400/20 shadow-2xl">

          <iframe
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
            src="https://maps.google.com/maps?q=Malibu%20Beach&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/20 hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-300">

            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              Address
            </h3>

            <p className="text-gray-300 leading-7">
              123 Ocean Drive
              <br />
              Malibu, California
              <br />
              United States
            </p>

          </div>


          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/20 hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-300">

            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              Contact
            </h3>

            <p className="text-gray-300">
              +1 (123) 456-7890
            </p>

            <p className="text-gray-300 mt-2">
              info@palmhorizon.com
            </p>

          </div>


          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/20 hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-300">

            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              Opening Hours
            </h3>

            <p className="text-gray-300">
              Monday - Sunday
            </p>

            <p className="text-cyan-400 font-semibold mt-2">
              Open 24 Hours
            </p>

          </div>

        </div>


        <div className="w-32 sm:w-40 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] mt-24"></div>


        <div className="text-center mt-6 mb-14">

          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-cyan-300 text-sm">
            Need Help?
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Frequently Asked Questions
          </h2>

        </div>


        <div className="max-w-4xl mx-auto space-y-6">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/20 hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-300">

            <h3 className="text-cyan-400 text-xl font-semibold">
              What time is check-in and check-out?
            </h3>

            <p className="text-gray-300 mt-3 leading-7">
              Check-in begins at 3:00 PM, while check-out is before 11:00 AM.
            </p>

          </div>


          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/20 hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-300">

            <h3 className="text-cyan-400 text-xl font-semibold">
              Is breakfast included?
            </h3>

            <p className="text-gray-300 mt-3 leading-7">
              Yes. Complimentary breakfast is included with selected room packages.
            </p>

          </div>


          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/20 hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-300">

            <h3 className="text-cyan-400 text-xl font-semibold">
              Do you offer airport transfers?
            </h3>

            <p className="text-gray-300 mt-3 leading-7">
              Yes, airport pickup and drop-off services are available upon request.
            </p>

          </div>


          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/20 hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-300">

            <h3 className="text-cyan-400 text-xl font-semibold">
              Is the resort family friendly?
            </h3>

            <p className="text-gray-300 mt-3 leading-7">
              Absolutely. We offer family suites, children's activities, and recreational facilities for all ages.
            </p>

          </div>

        </div>


      </div>

    </section>
  );
};

export default Location;