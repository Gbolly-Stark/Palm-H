const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/kling_20260627_VIDEO_Ultra_real_2181_0.mp4"
      />

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-7xl text-center">

          <h1 className="text-lg sm:text-xl md:text-2xl font-black tracking-[4px] uppercase">
            Palm Horizon
          </h1>
<h2 className="mt-6 px-4 text-center font-black text-cyan-400 text-5xl">
  Luxury Meet Nature
</h2>

          <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-200">
            Escape to a world of breathtaking ocean views, luxury suites,
            unforgettable experiences, and world-class hospitality.
          </p>

          <button className="mt-10 rounded-full bg-cyan-500 px-8 py-3 text-sm sm:px-10 sm:py-4 sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
            Reserve Now
          </button>

        </div>
      </div>

    </section>
  );
};

export default Hero;