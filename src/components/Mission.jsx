import missionBg from "../assets/mission-bg.png";

const Mission = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <h1 className="text-center text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white my-8">
        Our Mission
      </h1>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${missionBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto py-8 px-4 max-w-screen-xl text-center lg:py-16 lg:px-12 relative z-10">
          <span className="text-lg rounded-full text-gray-100 dark:text-gray-300 px-4 py-1.5 uppercase">
            Introducing new era of medicine
          </span>
          <h1 className="mt-4 mb-4 text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-100 dark:text-white drop-shadow-md">
            MSIC’s Mission
          </h1>
          <p className="mb-8 text-lg lg:text-xl font-normal text-gray-400 dark:text-gray-400 sm:px-6 md:px-16 xl:px-48">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mission;
