import { rooms } from "../types/Rooms";

const Featured = () => {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-cyan-600 to-slate-900 py-20 sm:py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="w-32 sm:w-40 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>

        <div className="text-center mt-6 mb-14">

          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-cyan-300 text-sm">
            Luxury Experience
          </p>

         <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
  Featured Rooms & Suites
</h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 leading-7">
            Discover our most luxurious accommodations designed for comfort,
            elegance, and breathtaking ocean views.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {rooms.map((room) => (
            <div
              key={room.id}
              className="group flex flex-col bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-cyan-400/20 shadow-xl hover:-translate-y-3 transition-all duration-500"
            >

              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-60 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">

                <h3 className="text-2xl font-bold text-cyan-400">
                  {room.title}
                </h3>

                <p className="text-gray-300 mt-3 leading-7 flex-1">
                  {room.description}
                </p>

                <div className="flex items-center justify-between mt-8">

                  <span className="text-cyan-400 text-2xl sm:text-3xl font-bold">
                    ${room.price.toFixed(2)}
                  </span>

                  <span className="text-gray-400 text-sm sm:text-base">
                    / Night
                  </span>

                </div>

                <button className="mt-8 w-full rounded-full bg-cyan-500 hover:bg-cyan-400 py-3 sm:py-4 text-white font-semibold transition duration-300 hover:scale-[1.02]">
                  Book Now
                </button>

              </div>

            </div>
          ))}

        </div>

        <div className="w-32 sm:w-40 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] mt-20"></div>

      </div>

    </section>
  );
};

export default Featured;