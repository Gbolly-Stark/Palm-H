import { amenities } from "../types/Amenity";

const Amenties = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 py-20 sm:py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="w-32 sm:w-40 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>

        <div className="text-center mt-6 mb-16">

          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-cyan-300 text-sm">
            Premium Experience
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-400 leading-tight">
            Luxury Amenities
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 leading-7">
            Enjoy our range of premium amenities and world-class services,
            carefully designed to make every stay unforgettable.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-cyan-400/20 shadow-xl hover:-translate-y-3 hover:border-cyan-400/40 transition-all duration-500"
            >

              <div className="overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-60 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-cyan-400 text-center">
                  {amenity.title}
                </h3>

                <p className="text-gray-300 mt-4 leading-7 text-center">
                  {amenity.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        <div className="w-32 sm:w-40 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] mt-20"></div>

      </div>

    </section>
  );
};

export default Amenties;