import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import arrowIcon from "@/public/images/shared/desktop/icon-right-arrow.svg";
import { DesignCardProps } from "@/app/data/designCards";

const DesignCard = ({ ...props }: DesignCardProps) => {
  return (
    <Link
      className={`relative rounded-2xl overflow-hidden ${props.rowSpan}`}
      href={props.link}
    >
      <picture className="relative">
        <source
          srcSet={props.tabletImg.src}
          media="(min-width: 480px) and (max-width: 1024px)"
        />
        <source srcSet={props.mobileImg.src} media="(max-width: 480px)" />
        <Image
          className={`w-full ${props.size}`}
          src={props.desktopImg}
          alt="design"
        />

        <div className=" flex flex-col gap-[1.2rem] items-center justify-center text-white h-full w-full absolute top-0 left-0 bg-[rgba(0,0,0,.6)] hover:bg-[rgba(231,129,107,.7)] md:gap-[2.4rem]">
          <h2 className="text-[2.8rem] leading-[3.6rem] md:text-[4rem] md:leading-[4.8rem]">
            {props.title}
          </h2>
          <div className="flex items-center gap-[1.6rem] text-[1.5rem] uppercase tracking-[.5rem] font-medium md:gap-[2.1rem]">
            view projects
            <Image src={arrowIcon} alt="Right arrow icon" />
          </div>
        </div>
      </picture>
    </Link>
  );
};

export default DesignCard;
