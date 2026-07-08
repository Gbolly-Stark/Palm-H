import { testimonials } from "../types/Testimonial";

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 py-20 sm:py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <div className="w-32 sm:w-40 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] mb-6"></div>

          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-cyan-300 text-sm">
            Guest Reviews
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow-blue-700">
            What Our Guests Say
          </h2>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-7">
            Hear from our satisfied guests about their unforgettable
            experiences at Palm Horizon Resort.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white/10 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 shadow-xl hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500"
            >

              <img
                className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-cyan-400 group-hover:scale-110 transition duration-500"
                src={testimonial.image}
                alt={testimonial.name}
              />

              <h3 className="text-2xl font-bold text-shadow-cyan-400 text-center mt-6">
                {testimonial.name}
              </h3>

              <p className="text-gray-300 text-center mt-5 leading-7 italic">
                "{testimonial.review}"
              </p>

              <div className="flex justify-center mt-8">
                <span className="text-yellow-400 text-2xl tracking-wider">
                  ★★★★★
                </span>
              </div>

            </div>
          ))}

        </div>

        <div className="w-32 sm:w-40 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] mt-20"></div>

      </div>

    </section>
  );
};

export default Testimonial;