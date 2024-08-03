"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import menuIcon from "@/public/images/shared/mobile/icon-hamburger.svg";
import closeIcon from "@/public/images/shared/mobile/icon-close.svg";
import Link from "next/link";

const NavList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isExpanded]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Image
        onClick={handleExpand}
        className={`cursor-pointer md:hidden ${isExpanded ? "hidden" : ""}`}
        width={24}
        src={menuIcon}
        alt="menu"
      />

      {isExpanded && (
        <Image
          onClick={handleExpand}
          src={closeIcon}
          className="cursor-pointer md:hidden"
          width={24}
          alt="close menu icon"
        />
      )}
      <ul
        className={`w-full text-[2.4rem] uppercase text-white absolute overflow-hidden bg-[--dark-black] max-h-0  p-0 transition-all z-10  left-0  top-full tracking-[.2rem] space-y-[3.2rem]  md:flex md:items-center md:w-auto md:bg-transparent md:tracking-[2px] md:text-[--dark-grey] md:text-sm md:top-0 md:px-0 md:right-[4rem] md:left-[initial] md:space-y-0 gap-[4.2rem] md:max-h-[initial] md:py-[7.1rem]  ${
          isExpanded ? "py-[4.8rem] px-[2.4rem] max-h-[37.5rem]  " : ""
        }`}
      >
        <li>
          <Link href="/company">Our Company</Link>
        </li>
        <li>
          <Link href="/locations">Locations</Link>
        </li>
        <li>
          <Link href="/contacts">Contact</Link>
        </li>
      </ul>
      {isExpanded && <div className="overlay"></div>}
    </>
  );
};

export default NavList;
