import React from "react";
import { FooterData1 } from "../../DataForPage/dummyData";
import { FooterData2 } from "../../DataForPage/dummyData";
import { FooterData3 } from "../../DataForPage/dummyData";
import logo from "../../assets/images/logo1.jpg";
import googlePlay from "../../assets/images/google-play.svg";
import appleStore from "../../assets/images/apple-store.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    
        <div>
          <p className="sm:text-xs text-dark pb-2 font-inter font-light cursor-pointer no-underline align-middle tracking-wide normal-case">
            Copyright {year} page by davay_o'zgartir
          </p>
        </div>
     
  );
};

export default Footer;
