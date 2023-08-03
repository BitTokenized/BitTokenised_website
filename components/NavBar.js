import React from "react";
import Link from "next/link";
import { AiOutlineInfoCircle, AiOutlineHome } from "react-icons/ai";

const NavBar = () => {
  const isAboutPage = window.location.pathname === "/about-us";

  return (
    <div className="navbar bg-transparent flex justify-between items-center">
      <Link href="/">
        <a>
          <img
            src="images/logo_2.png"
            alt="Logo_2"
            className="ml-2 h-8 md:h-12"
          />
        </a>
      </Link>
      <Link href={isAboutPage ? "/" : "/about-us"}>
        <a className="flex items-center space-x-1 text-white hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer">
          {isAboutPage ? (
            <AiOutlineHome className="h-5 w-5" />
          ) : (
            <AiOutlineInfoCircle className="h-5 w-5" />
          )}
          <span>{isAboutPage ? "Home" : "About Us"}</span>
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
