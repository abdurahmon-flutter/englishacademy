import React, { useState, useEffect, useContext } from "react";
import { navbarData } from "../../DataForPage/dummyData";
import logo from "../../assets/images/logo1.jpg";
import { Link } from "react-scroll";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeBgContext);
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <div>
      <div
        className={
          scroll
            ? "sm:hidden h-16 w-full fixed flex transition items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20"
            : "sm:hidden bg-transparent h-16 w-full fixed transition ease-in-out duration-500 flex items-center z-20"
        }
      >
        <div className="grid grid-cols-2 justify-items-center items-center content-center w-full">
          <div className="pl-20 w-4/5">
              
          </div>
          <div className="flex flex-row items-center w-full">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
