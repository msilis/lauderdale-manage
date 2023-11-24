"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type ButtonProps = {
  buttonText: string;
  url: string;
  className?: string;
};

type NavbarProps = {
  buttons: ButtonProps[];
};

const Navbar: React.FC<NavbarProps> = ({ buttons }) => {
  const router = useRouter();
  const handleButtonClick = (url: string) => {
    router.push(url);
  };
  return (
    <div className="navbar bg-base-100 outline outline-gray-50 mt-2 drop-shadow-xl md:max-md:w-72 overflow-auto">
      {buttons &&
        buttons.map((button, index) => (
          <button
            key={index}
            className={`${button.className} || btn btn-ghost text-l`}
            onClick={() => handleButtonClick(button.url)}
          >
            {button.buttonText}
          </button>
        ))}
    </div>
  );
};

export default Navbar;
