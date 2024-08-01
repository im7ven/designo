import Image from "next/image";
import logo from "@/public/images/shared/desktop/logo-dark.png";
import NavList from "./NavList";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center py-9 px-6 relative z-10">
      <h1>
        <a href="/">
          <Image width={202} src={logo} alt="logo" />
        </a>
      </h1>
      <NavList />
    </nav>
  );
};

export default Navbar;
