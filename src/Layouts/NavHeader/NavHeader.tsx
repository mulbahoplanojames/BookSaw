import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  User,
  ShoppingCart,
  Search,
} from "lucide-react";

const NavHeader = () => {
  return (
    <>
      <div className="flex justify-between md:flex-nowrap flex-wrap md:gap-0 gap-y-4  text-lg fixed top-0 z-50 w-full bg-p1 py-3 border-b border-red-400">
        <div className=" w-full md:pl-14 pl-4 py-2 flex gap-12 justify-start items-center">
          <Facebook className="hover:cursor-pointer" />
          <Instagram className="hover:cursor-pointer" />
          <Twitter className="hover:cursor-pointer" />
          <Linkedin className="hover:cursor-pointer" />
        </div>
        <div className="w-full flex items-center md:justify-end justify-between md:gap-12 gap-y-2 md:gap-x-8 gap-x-10 md:px-8 px-4 py-2 flex-wrap md:border-l-4 ">
          <p className="flex items-center gap-2">
            <User />
            <span>Account</span>
          </p>
          <p className="flex items-center gap-3">
            <ShoppingCart />
            <span>Cart</span>
          </p>
          <div className="flex items-center gap-4">
            <Search className="hover:cursor-pointer " />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
