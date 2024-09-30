import Articles from "./components/Articles";
import BestSellingBooks from "./components/BestSellingBooks";
import DownloadApp from "./components/DownloadApp";
import FeaturedBooks from "./components/FeaturedBooks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OfferBooks from "./components/OfferBooks";
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
      <OfferBooks />
      <Articles />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default App;
