import { useState } from "react";
import { Link } from "react-scroll";
import navLinks from "../../Data/Data";
import { Menu, X } from "lucide-react";

/**
 * The Navbar component renders the navigation bar of this website.
 * It contains links to different pages and a sign in button.
 * It also has a responsive menu for smaller devices.
 */
const Navbar = () => {
  // State variable to keep track of whether the menu is open or not.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`flex justify-between items-center bg-p1  py-4 md:px-10 px-4 border-y border-slate-400 fixed z-50 w-full md:top-[4.2rem] top-[7.7rem]`}
      >
        {/* Link to the home page */}
        <Link to="/" className={`text-2xl font-bold  uppercase`}>
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
                  onClick={() => window.scrollTo(0, 0)}
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
          <nav className="lg:bottom-auto bg-primary fixed top-[11rem] bottom-10 left-0 right-0 z-50">
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
                <li
                  key={navlink.label}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    window.scrollTo(0, 8000);
                  }}
                >
                  <a
                    href={navlink.path}
                    className="font-montserrat active:text-black text-2xl leading-normal text-white"
                  >
                    {navlink.label}
                  </a>
                </li>
              ))}
              <Link
                to="/sign-up"
                className="py-1.5 lg:px-4 px-5 border-[1px] border-white text-xl lg:text-lg rounded-3xl text-white hover:opacity-50"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  window.scrollTo(0, 8000);
                }}
              >
                sign in
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
