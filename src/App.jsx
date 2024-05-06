import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Sponsor from "./components/Sponsor";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Mission />
      <Product />
      <Sponsor />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
