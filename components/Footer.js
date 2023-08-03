import Link from "next/link";

import { FaGithub, FaTwitter, FaLinkedin, FaAddressCard } from "react-icons/fa";

const Footer = () => {
  const btnClass = "btn btn-ghost hover:bg-transparent";
  const iconClass =
    "w-8 h-8 text-white hover:text-secondary transition-all duration-300 ease-in-out cursor-pointers";

  return (
    <footer className="pt-2 text-center">
      <button className={btnClass}>
        <a
          href="https://linkedin.com/in/BitTokenized"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={iconClass} />
        </a>
      </button>
      <button className={btnClass}>
        <a
          href="https://twitter.com/BitTokenized"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className={iconClass} />
        </a>
      </button>
      <button className={btnClass}>
        <a
          href="https://github.com/BitTokenized"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={iconClass} />
        </a>
      </button>
    </footer>
  );
};

export default Footer;
