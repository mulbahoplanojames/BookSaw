import BestSellingBooks from "./components/BestSellingBooks";
import FeaturedBooks from "./components/FeaturedBooks";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import PopularBooks from "./components/PopularBooks";
import Navbar from "./Layouts/Navbar/Navbar";
import NavHeader from "./Layouts/NavHeader/NavHeader";

const App = () => {
  return (
    <>
      <NavHeader />
      <Navbar />
      <Hero />
      <Partners />
      <FeaturedBooks />
      <BestSellingBooks />
      <PopularBooks />
    </>
  );
};

export default App;
