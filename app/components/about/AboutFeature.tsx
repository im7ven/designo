import Image from "next/image";
import talentImgDesktop from "@/public/images/about/desktop/image-world-class-talent.jpg";
import talentImgTablet from "@/public/images/about/tablet/image-world-class-talent.jpg";
import talentImgMobile from "@/public/images/about/mobile/image-world-class-talent.jpg";
import { AboutFeatureProps } from "@/app/data/AboutFeatureSections";

const AboutFeature = ({ ...props }: AboutFeatureProps) => {
  return (
    <section className="bg-[#FDF3F0] rounded-2xl text-center grid grid-rows-[auto_1fr] md:overflow-hidden md:mt-[12rem] lg:mt-[16rem] lg:text-left lg:grid-cols-[auto_auto]">
      <div className={` lg:w-[47.6rem] ${props.order}`}>
        <picture>
          <source
            srcSet={props.tabletImg.src}
            media="(min-width: 480px) and (max-width: 1024px)"
          />
          <source srcSet={props.mobile.src} media="(max-width: 480px)" />
          <Image
            className="lg:w-full lg:h-full"
            layout="responsive"
            src={props.desktopImg}
            alt="Team meeting"
          />
        </picture>
      </div>
      <div className="px-[2.4rem] py-[8rem] md:px-[6rem] md:py-[6.8rem] lg:px-[9.5rem] lg:self-center">
        <h2 className="mb-[2.4rem] text-[--peach-dark] tracking-normal">
          {props.heading}
        </h2>
        <div className="max-w-[57.3rem] mx-auto">
          <p className="body-text text-[--dark-grey] mb-[2.4rem]">
            {props.paragraph1}
          </p>
          <p className="body-text text-[--dark-grey]">{props.paragraph2}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutFeature;
