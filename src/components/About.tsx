import { abouts } from "../types/About";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 sm:py-20 px-6 text-center">

      <p className="text-lg sm:text-xl font-black text-gray-600">
        About
      </p>

      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-black font-bold">
        From Dream To Staycation
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-10 max-w-7xl w-full items-center">

        <img
          src="/Luxury Villa with Infinity Pool in Sitges.jfif"
          alt="About"
          className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
        />


        <div className="flex flex-col justify-center gap-5">

          {abouts.map((about) => (

            <div
              key={about.title}
              className="bg-gray-100 border border-gray-300 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >

              <h3 className="text-xl sm:text-2xl font-serif text-blue-800">
                {about.title}
              </h3>

              <p className="text-gray-700 mt-3 font-mono leading-7">
                {about.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default About;