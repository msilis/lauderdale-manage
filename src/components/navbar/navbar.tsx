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
    console.log("Button handler clicked");
    console.log(url);
    router.push(url);
  };
  return (
    <div className="navbar bg-base-100 outline outline-gray-50 mt-2 drop-shadow-xl">
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
