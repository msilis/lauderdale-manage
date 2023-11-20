"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type NavbarProps = {
  buttonText: string;
  url: string;
};

const Navbar: React.FC<NavbarProps> = ({ buttonText, url }) => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push(url);
  };
  return (
    <div className="navbar bg-base-100 outline outline-gray-50 mt-2 drop-shadow-xl md:max-md:w-72 overflow-auto">
      <button
        className="btn btn-ghost text-l"
        onClick={() => handleButtonClick()}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Navbar;
