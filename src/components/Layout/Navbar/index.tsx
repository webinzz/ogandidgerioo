import { useState } from "react";
import Hamburger from "./Hamburger";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavSide from "./NavSide";

const Navbar = () => {
  const [navFull, setNavFull] = useState(true);
  function NavToggle(){
    setNavFull(!navFull);
    return navFull;
  }
  return (
    <nav className="fixed flex justify-between items-center top-0 left-0 w-full h-16 md:px-15 px-4 bg-white text-slate-500 shadow-md z-50">
        <NavLogo />
        <NavMenu />
        <Hamburger navFull={navFull} NavToggle={NavToggle} />
        <NavSide navFull={navFull} NavToggle={NavToggle} />
    </nav>
  );
};

export default Navbar;
