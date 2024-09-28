import FeaturedBooks from "./components/FeaturedBooks";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
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
    </>
  );
};

export default App;
