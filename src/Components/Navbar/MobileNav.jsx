import React, { useState, useContext } from "react";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import MobileNavContainer from "./MobileNavContainer";
import { navbarData } from "../../DataForPage/dummyData";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeBgContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
     
    </div>
  );
};

export default MobileNav;
