import contactImg from "../assets/contact.png";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 max-w-full h-screen">
      <div className="flex flex-col lg:flex-row container mx-auto gap-10 mt-20">
        {/* Left Side */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl h-full p-10 flex-1">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <img
            src={contactImg}
            alt="Contact Image"
            className="w-full h-3/4 object-cover bg-top rounded-xl"
          />
        </div>
      </div>
      <div className="bg-gray-900 py-4 ">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-gray-400 text-sm ">
            Copyright @ MSIC’S PHARMA, 2024
          </p>
          <div className="flex items-center justify-between gap-2">
            <span className="bg-gray-700 dark:bg-gray-700 p-2 rounded-full shadow-md">
              <FiMail className="text-32 text-gray-300" />
            </span>
            <p>
              <span className="text-gray-200 dark:text-gray-200">
                Investor Email:{" "}
              </span>
              <span className="text-gray-400 dark:text-gray-400">
                example@gmail.com{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
