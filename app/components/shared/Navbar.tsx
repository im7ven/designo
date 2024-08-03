import Image from "next/image";
import logo from "@/public/images/shared/desktop/logo-dark.png";
import NavList from "./NavList";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center py-14 px-6 md:px-16 md:py-[6.4rem] relative z-10m max-w-[111rem] mx-auto">
      <Link href="/">
        <Image width={202} src={logo} alt="logo" />
      </Link>
      <NavList />
    </nav>
  );
};

export default Navbar;
