import { useState } from "react";
import Drawer from "./Drawer";
import HamburgerButton from "./HamburgerButton";

export default function MobileMenu() {
  
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="lg:hidden">
        <HamburgerButton
          handleShowMenu={handleShowMenu}
          showMenu={showMenu}
        ></HamburgerButton>
        <Drawer handleShowMenu={handleShowMenu} showMenu={showMenu}></Drawer>
      </div>
    </>
  );
}
