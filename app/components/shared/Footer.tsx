"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import lightLogo from "@/public/images/shared/desktop/logo-light.png";
import facebookIcon from "@/public/images/shared/desktop/icon-facebook.svg";
import youtubeIcon from "@/public/images/shared/desktop/icon-youtube.svg";
import twitterIcon from "@/public/images/shared/desktop/icon-twitter.svg";
import pinterestIcon from "@/public/images/shared/desktop/icon-pinterest.svg";
import instagramIcon from "@/public/images/shared/desktop/icon-instagram.svg";
import FooterCTA from "./FooterCTA";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentPath = usePathname();

  const footerPaddingDesktop =
    currentPath === "/contact" ? "md:pt-[7.2rem]" : "md:pt-[16.6rem]";

  const footerPaddingMobile =
    currentPath === "/contact" ? "pt-[25.3rem]" : "pt-[7rem]";

  return (
    <>
      {currentPath !== "/contact" && (
        <div className="translate-y-[50%] md:translate-y-[8.5rem] lg:translate-y-[7.1rem]">
          <FooterCTA />
        </div>
      )}
      <footer
        className={`bg-[--dark-black] pt-[25.3rem]  pb-[6.4rem] px-[2.4rem] ${footerPaddingDesktop} ${footerPaddingMobile} md:px-[3.9rem]`}
      >
        <div className="max-w-[111rem] lg:mx-auto">
          <div className="md:flex md:justify-between">
            <Link href="/">
              <Image
                className="mx-auto md:mx-0"
                width={202}
                height={27}
                src={lightLogo}
                alt="logo"
              />
            </Link>
            <hr className="border-[rgba(151,151,151,.6)] mt-[4rem] mb-[3.1rem] md:hidden" />
            <ul className="flex flex-col items-center gap-[3.2rem] md:flex-row nav-item text-white">
              <Link href="/about">
                <li>Our company</li>
              </Link>
              <Link href="/locations">
                <li>Locations</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <hr className=" hidden border-[rgba(151,151,151,.6)] my-[3.2rem] md:block md:my-[3.5rem]" />
          <div className="md:flex gap-[3rem] items-center">
            <div className="text-[rgba(255,255,255,.5)] text-center text-[1.6rem] my-[4rem] space-y-[4rem] md:space-y-0 md:flex md:my-0 md:gap-[5.5rem]">
              <div>
                <p className="font-bold">Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="font-bold">
                <p>Contact Us (Central Office)</p>
                <p>P: +1 254-863-8967</p>
                <p>M: contact@designo.co</p>
              </div>
            </div>
            <div className="flex gap-[1.6rem] justify-center md:flex-1 md:justify-end md:self-end">
              <SocialIcon iconSrc={facebookIcon} />
              <SocialIcon iconSrc={youtubeIcon} />
              <SocialIcon iconSrc={twitterIcon} />
              <SocialIcon iconSrc={pinterestIcon} />
              <SocialIcon iconSrc={instagramIcon} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const SocialIcon = ({ iconSrc }: { iconSrc: StaticImageData }) => {
  return (
    <Link className="social-icons" href="/">
      <Image width={24} src={iconSrc} alt="Social icon" />
    </Link>
  );
};
