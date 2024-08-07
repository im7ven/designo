import FeatureCard from "./components/home/FeatureCard";
import HomeHero from "./components/home/HomeHero";
import DesignCard from "./components/shared/DesignCard";
import Footer from "./components/shared/Footer";
import FooterCTA from "./components/shared/FooterCTA";
import { appDesign, graphicDesign, webDesignLg } from "./data/designCards";
import {
  friendlyCard,
  passionateCard,
  resourcefulCard,
} from "./data/featureCards";

export default function Home() {
  return (
    <main>
      <div className=" max-w-[111rem] box-content mx-auto md:px-16">
        <HomeHero />
        <section className="mt-[12rem] grid gap-[2.4rem] px-[2.4rem] max-w-[68.9rem] md:px-0 mx-auto lg:max-w-[initial] lg:grid-cols-2 lg:grid-rows-2 lg:mt[16rem]">
          <DesignCard {...webDesignLg} />
          <DesignCard {...appDesign} />
          <DesignCard {...graphicDesign} />
        </section>
        <section className="flex flex-col gap-[8rem] px-[2.4rem] mt-[12rem] md:px-0 md:gap-[3.2rem] lg:flex-row lg:gap-[3rem] lg:mt-[16rem]">
          <FeatureCard {...passionateCard} />
          <FeatureCard {...resourcefulCard} />
          <FeatureCard {...friendlyCard} />
        </section>
      </div>
      <Footer />
    </main>
  );
}
