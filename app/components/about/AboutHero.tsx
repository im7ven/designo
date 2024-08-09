import Image from "next/image";
import heroImgDesktop from "@/public/images/about/desktop/image-about-hero.jpg";
import heroImgTablet from "@/public/images/about/tablet/image-about-hero.jpg";
import heroImgMobile from "@/public/images/about/mobile/image-about-hero.jpg";

const AboutHero = () => {
  return (
    <section className=" text-center grid grid-rows-[auto_1fr] lg:items-center lg:grid-rows-[1fr_auto] lg:text-left lg:grid-cols-[1fr_476px] lg:row-gap-[2.4rem] overflow-hidden mx-auto bg-[--peach-dark] text-white md:rounded-2xl">
      <div className=" lg:max-w-[47.6rem]">
        <picture>
          <source
            srcSet={heroImgTablet.src}
            media="(min-width: 480px) and (max-width: 1024px)"
          />
          <source srcSet={heroImgMobile.src} media="(max-width: 480px)" />
          <Image
            className="lg:w-full"
            layout="responsive"
            src={heroImgDesktop}
            alt="Team meeting"
          />
        </picture>
      </div>
      <div className="px-[2.4rem] py-[8rem] md:py-[6.4rem] lg:col-span-1 lg:row-span-1 lg:order-first lg:max-w-[63.5rem] lg:pl-[6.5rem] lg:pr-[8.2rem]">
        <h1 className="mb-[2.4rem] lg:mb-[3.2rem]">About Us</h1>
        <p className="body-text max-w-[57.3rem] mx-auto lg:max-w-[45.8rem] lg:mx-0">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We've partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We're always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
