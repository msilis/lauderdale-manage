"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  buttonText: string;
  url?: string;
  className?: string;
  onClick?: () => void;
};

type NavbarProps = {
  buttons: ButtonProps[];
};

const Navbar: React.FC<NavbarProps> = ({ buttons }) => {
  const router = useRouter();
  const handleButtonClick = (url?: string, onClick?: () => void) => {
    if (onClick) {
      onClick();
    } else {
      router.push(url!);
    }
  };
  return (
    <div className="navbar bg-base-100 outline outline-gray-50 mt-2 drop-shadow-xl md:max-md:w-72 overflow-auto">
      {buttons &&
        buttons.map(
          (
            { buttonText, url, className = "btn btn-ghost text-l", onClick },
            index
          ) => (
            <button
              key={index}
              className={`${className}`}
              onClick={(event) => {
                event.preventDefault();
                handleButtonClick(url, onClick);
              }}
            >
              {buttonText}
            </button>
          )
        )}
    </div>
  );
};

export default Navbar;
