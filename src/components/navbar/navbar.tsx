import Link from "next/link";

type NavbarProps = {
  buttonText: string;
};

const Navbar: React.FC<NavbarProps> = ({ buttonText }) => {
  return (
    <div className="navbar bg-base-100 outline outline-gray-50 mt-2 drop-shadow-xl">
      <a className="btn btn-ghost text-l">{buttonText}</a>
    </div>
  );
};

export default Navbar;
