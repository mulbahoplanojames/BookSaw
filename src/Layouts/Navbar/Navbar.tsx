import { useEffect, useState } from "react";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import navLinks from "../../Data/Data";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // State variable to keep track of whether the menu is open or not.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    const handleBegin = (to: string, element: HTMLElement) => {
      console.log("begin", to, element);
    };
    Events.scrollEvent.register("begin", handleBegin);

    // Registering the 'end' event and logging it to the console when triggered.
    const handleEnd = (to: string, element: HTMLElement) => {
      console.log("end", to, element);
    };
    Events.scrollEvent.register("end", handleEnd);

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to: string) => {
    console.log(to);
  };

  return (
    <>
      <nav
        className={`flex justify-between items-center bg-p1  py-4 md:px-10 px-4 border-y border-slate-400 fixed z-50 w-full md:top-[4.2rem] top-[7.7rem]`}
      >
        {/* Link to the home page */}
        <Link
          to="/"
          className={`text-2xl font-bold  uppercase cursor-pointer`}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={scrollToTop}
          onSetActive={scrollToTop}
        >
          Book<span className="font-thin">Saw</span>
        </Link>
        {/*//! Menu items for larger devices and mapping through the links */}
        <div>
          <ul className="max-lg:hidden">
            {navLinks.map((navlink) => (
              <li key={navlink.label} className={`inline-block px-8 `}>
                <Link
                  to={navlink.path}
                  className={`font-montserrat focus:text-primary text-base leading-normal text-slate-600 uppercase hover:text-primary hover:cursor-pointer`}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  {navlink.label}
                </Link>
              </li>
            ))}
          </ul>
          {/*//! Contact Us button */}
          <div className="lg:gap-x-6 gap-x-4 flex justify-center items-center">
            {/*//! Menu toggle button for smaller devices */}
            <Menu
              className={`max-lg:block hidden text-3xl cursor-pointer`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          </div>
        </div>
      </nav>

      {/*//! Responsive menu for smaller devices */}
      {isMenuOpen && (
        <div>
          <nav className="lg:bottom-auto bg-[#88846a] fixed top-[11rem] bottom-10 left-0 right-0 z-50">
            {/* Close button for the menu */}
            <div
              className="max-lg:block fixed right-0 hidden px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <X className=" text-3xl text-white" />
            </div>
            <ul className=" lg:hidden bg-1 gap-y-7 z-40 flex flex-col items-center justify-center h-full">
              {/* Menu items for smaller devices */}
              {navLinks.map((navlink) => (
                <li key={navlink.label}>
                  <Link
                    to={navlink.path}
                    className="font-montserrat active:text-black text-2xl leading-normal text-white"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    {navlink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
