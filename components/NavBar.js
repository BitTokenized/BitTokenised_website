import React from "react";
import { AiOutlineInfoCircle, AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const isAboutPage = router.pathname === "/about-us";

  const handleClick = () => {
    if (isAboutPage) {
      router.push("/");
    } else {
      router.push("/about-us");
    }
  };

  return (
    <div className="navbar bg-transparent flex justify-between items-center">
      <a href="/">
        <img
          src="BitTokenised_website/images//logo_2.png"
          alt="Logo_2"
          className="ml-2 h-8 md:h-12"
        />
      </a>
      <button
        onClick={handleClick}
        className="flex items-center space-x-1 text-white hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer"
      >
        {isAboutPage ? (
          <AiOutlineHome className="h-5 w-5" />
        ) : (
          <AiOutlineInfoCircle className="h-5 w-5" />
        )}
        <span>{isAboutPage ? "Home" : "About Us"}</span>
      </button>
    </div>
  );
};

export default NavBar;
