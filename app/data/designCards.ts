import { StaticImageData } from "next/image";
import webDesignDesktopLg from "@/public/images/home/desktop/image-web-design-large.jpg";
import webDesignDesktopSm from "@/public/images/home/desktop/image-web-design-small.jpg";
import webDesignTablet from "@/public/images/home/tablet/image-web-design.jpg";
import webDesignMobile from "@/public/images/home/mobile/image-web-design.jpg";
import appDesignDesktop from "@/public/images/home/desktop/image-app-design.jpg";
import appDesignTablet from "@/public/images/home/tablet/image-app-design.jpg";
import appDesignMobile from "@/public/images/home/mobile/image-app-design.jpg";
import graphicDesignDesktop from "@/public/images/home/desktop/image-graphic-design.jpg";
import graphicDesignTablet from "@/public/images/home/tablet/image-graphic-design.jpg";
import graphicDesignMobile from "@/public/images/home/mobile/image-graphic-design.jpg";

export interface DesignCardProps {
  link: string;
  desktopImg: StaticImageData;
  tabletImg: StaticImageData;
  mobileImg: StaticImageData;
  title: string;
  size?: string;
  rowSpan?: string;
}

export const webDesignLg = {
  title: "WEB DESIGN",
  desktopImg: webDesignDesktopLg,
  tabletImg: webDesignTablet,
  mobileImg: webDesignMobile,
  link: "/web-design",
  size: "64rem",
  rowSpan: "row-span-2",
};

export const webDesignSm = {
  title: "WEB DESIGN",
  desktopImg: webDesignDesktopSm,
  tabletImg: webDesignTablet,
  mobileImg: webDesignMobile,
  link: "/web-design",
  size: "lg:h-[30.8rem]",
};

export const appDesign = {
  title: "APP DESIGN",
  desktopImg: appDesignDesktop,
  tabletImg: appDesignTablet,
  mobileImg: appDesignMobile,
  link: "/app-design",
  size: "lg:h-[30.8rem]",
};

export const graphicDesign = {
  title: "GRAPHIC DESIGN",
  desktopImg: graphicDesignDesktop,
  tabletImg: graphicDesignTablet,
  mobileImg: graphicDesignMobile,
  link: "/graphic-design",
  size: "lg:h-[30.8rem]",
};
