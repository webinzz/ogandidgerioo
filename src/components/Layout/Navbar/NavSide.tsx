import { Link } from "react-router-dom";
import NavLogo from "./NavLogo";

const NavSide = ({
  navFull,
  NavToggle,
}: {
  navFull: boolean;
  NavToggle: () => boolean;
}) => {
  return (
    <>
      <div
        className={`fixed bg-black/50 duration-1000 transition-all ${
          navFull ? "opacity-0 hidden" : "opacity-100 block"
        } w-screen h-screen dark:bg-slate-700 right-0 top-0 justify-center items-center z-40`}
      >
        .
      </div>
      <div
        className={`fixed w-3/5 h-screen  top-0 p-6 lg:pt-16 flex flex-col justify-between bg-white z-50 transition-all duration-500 ${
          navFull
            ? " -left-full pointer-events-none"
            : " left-0 pointer-events-auto"
        }`}
      >
        <ul className="flex flex-col gap-4  text-slate-600 dark:text-slate-100">
          <NavLogo />
          <Link onClick={NavToggle} to="/" className="mt-6 font-medium">
            Home
          </Link>
          <Link onClick={NavToggle} to="/about" className="font-medium">
            About
          </Link>
          <Link onClick={NavToggle} to="/product" className="font-medium">
            Product
          </Link>
          <Link onClick={NavToggle} to="/contact" className="font-medium">
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavSide;
