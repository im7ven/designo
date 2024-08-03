import Image from "next/image";
import phone from "@/public/images/home/desktop/image-hero-phone.png";

const HomeHero = () => {
  return (
    <section className="home-hero home-hero-design grid lg:items-center lg:grid-cols-2 bg-[--peach-dark] pt-[8rem] px-[2.4rem] h-[84.3rem]  relative overflow-hidden md:rounded-2xl lg:h-[64rem]  lg:pl-[9.6rem] lg:py-[14.5rem]">
      <div className="text-white text-center space-y-[2.4rem] lg:text-left max-w-[32.7rem] mx-auto md:max-w-[50rem]">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p className="body-text body-text-light md:max-w-[44.5rem]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="btn-primary">Learn More</button>
      </div>
    </section>
  );
};

export default HomeHero;
