import sponsor1 from "../assets/sponsor-1.png";
import sponsor2 from "../assets/sponser-2.png";
import sponsor4 from "../assets/sponsor-4.png";

const Sponsor = () => {
  return (
    <div className="bg-white dark:bg-gray-900 max-w-full">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2
          className="text-center py-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-md"
          style={{ fontFamily: "Encode Sans Semi Expanded" }}
        >
          Our Sponsor
        </h2>
        <div className="flex items-center justify-center gap-20 py-8">
          <img
            src={sponsor1}
            alt="sponsor-img"
            className="w-40 h-auto bg-gray-700 rounded-xl px-6"
          />
          <img
            src={sponsor2}
            alt="sponsor-img"
            className="w-40 h-auto bg-gray-700 rounded-xl px-6"
          />
          <img
            src={sponsor4}
            alt="sponsor-img"
            className="w-40 h-auto bg-gray-700 rounded-xl py-2 px-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
