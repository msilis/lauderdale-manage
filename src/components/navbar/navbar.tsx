import { ReactNode } from "react";

type NavbarProps = {
  children: ReactNode;
  className?: string;
};

const Navbar = ({ children, className }: NavbarProps) => {
  return <div className={className}>{children}</div>;
};

export default Navbar;
