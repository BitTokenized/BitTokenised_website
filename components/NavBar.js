import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineInfoCircle, AiOutlineHome } from "react-icons/ai";

const NavBar = () => {
  const [isAboutPage, setIsAboutPage] = useState(false);

  const handleClick = () => {
    setIsAboutPage(!isAboutPage);
  };

  return (
    <div className="navbar bg-transparent flex justify-between items-center">
      <Link href="/">
        <img
          src="images/logo_2.png"
          alt="Logo_2"
          className="ml-2 h-8 md:h-12"
        />
      </Link>
      <button
        onClick={handleClick}
        className="flex items-center space-x-1 text-white hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer"
      >
        {isAboutPage ? (
          <>
            <AiOutlineHome className="h-5 w-5" />
            <Link href="/">
              <span>Home</span>
            </Link>
          </>
        ) : (
          <>
            <AiOutlineInfoCircle className="h-5 w-5" />
            <Link href="/about-us">
              <span>About Us</span>
            </Link>
          </>
        )}
      </button>
    </div>
  );
};

export default NavBar;
