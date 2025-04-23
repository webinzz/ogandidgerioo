import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <ul className="hidden lg:flex items-center gap-6">
      <li>
        <Link to="/" className="cursor-pointer hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="cursor-pointer hover:underline">
          About
        </Link>
      </li>
      <li>
        <Link to="/product" className="cursor-pointer hover:underline">
          Product
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="cursor-pointer bg-yellow-400 rounded-xl p-2 px-3 text-white"
        >
          Contact me
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
