import missionBg from "../assets/mission-bg.png";

const Mission = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-4">
        <section
          className="relative container mx-auto rounded-xl h-screen bg-white dark:bg-gray-900"
          style={{
            backgroundImage: `url(${missionBg})`, // Pass the URL as a string here
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-75 rounded-xl"></div>
          <div className="container mx-auto py-8 px-4 max-w-screen-xl text-center lg:py-16 lg:px-12 bg-cover bg-center relative z-10">
            <span className="text-lg rounded-full text-gray-100 px-4 py-1.5 mr-3 dark:text-gray-300 uppercase">
              Introducing new era of medicine
            </span>
            <h1 className="mt-4 mb-4 text-4xl uppercase font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white drop-shadow-md">
              msic’s mission
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Mission;
