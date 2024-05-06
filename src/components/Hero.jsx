import heroMain from "../assets/hero-main.jpg";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 max-w-full">
      <div className="grid max-w-screen-xl px-4 py-2 mx-auto gap-4 md:gap-8 lg:gap-12 lg:py-16 lg:grid-cols-12">
        {/* Left Side */}
        <div className="lg:col-span-7">
          <div className="place-self-center text-center md:text-left">
            <p className="mb-2 text-lg lg:text-xl text-gray-500 dark:text-gray-400 font-semibold">
              MSCI PERSISTANCE
            </p>
            <h1 className="mb-4 text-3xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight md:leading-normal dark:text-white uppercase">
              Developing & providing innovative naturally-sourced gmp psilosybin
            </h1>
          </div>
        </div>
        {/* Right Side */}
        <div className="lg:col-span-5 lg:flex lg:items-center">
          <img src={heroMain} className="w-full h-auto rounded-xl" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
