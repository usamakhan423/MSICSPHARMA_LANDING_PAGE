import heroMain from "../assets/hero-main.jpg";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <p className="max-w-2xl mb-2 text-gray-500 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-400 tracking-wide font-semibold">
            MSCI PERSISTANCE
          </p>
          <h1
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight  md:text-4xl xl:text-5xl dark:text-white uppercase"
            style={{
              fontFamily: "Encode Sans Semi Expanded",
              lineHeight: "3.5rem",
            }}
          >
            Developing & providing innovative naturally-sourced gmp psilosybin
          </h1>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
          <img src={heroMain} className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
