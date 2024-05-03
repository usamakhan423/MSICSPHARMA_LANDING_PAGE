import productMain from "../assets/product-main.png";
import productLeft from "../assets/product-leftside.png";
import productRight from "../assets/product-rightside.png";

const Product = () => {
  return (
    <div className="bg-white dark:bg-gray-900 max-w-full h-screen">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2
          className="text-center py-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-md"
          style={{ fontFamily: "Encode Sans Semi Expanded" }}
        >
          Our Product
        </h2>
        <div className="grid max-w-screen-xl h-screen px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
          <div className="mr-auto lg:col-span-7 mt-20">
            <p className="max-w-2xl mb-2 text-gray-700 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-500 tracking-wide font-semibold">
              MSCI PERSISTANCE
            </p>
            <h1
              className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight  md:text-4xl xl:text-5xl leading- dark:text-white"
              style={{
                fontFamily: "Encode Sans Semi Expanded",
                lineHeight: "3.5rem",
              }}
            >
              welcome to the world of medicine
            </h1>
            <p className="w-[650px] text-lg text-gray-600 dark:text-gray-400">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex rounded-lg flex flex-col gap-5">
            <div className="grid grid-cols-2 grid-rows-2 h-2/3 gap-5">
              {/* First image takes full width and half height */}
              <img
                src={productMain}
                className="rounded-xl col-span-2 row-span-1 w-full h-full"
              />

              {/* Second row with two images */}
              <div className="flex justify-between gap-5">
                <img src={productLeft} className="rounded-xl w-full h-full" />
                <img src={productRight} className="rounded-xl w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
