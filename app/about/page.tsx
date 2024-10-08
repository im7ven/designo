import AboutFeature from "../components/about/AboutFeature";
import AboutHero from "../components/about/AboutHero";
import Footer from "../components/shared/Footer";
import LocationGrid from "../components/shared/LocationGrid";
import { realDealFeature, talentFeature } from "../data/AboutFeatureSections";

const AboutPage = () => {
  return (
    <div className="relative">
      <main className="max-w-[111rem] mx-auto md:px-[2.4rem] xl:px-0">
        <div className="about-design1 w-[100.6rem] h-[59.2rem]"></div>
        <AboutHero />
        <AboutFeature {...talentFeature} />
        <LocationGrid />
        <div className="md:mb-[3.5rem] lg:mb-[5.9rem]">
          <AboutFeature {...realDealFeature} />
        </div>
      </main>
      <div className="about-design2 w-[100.6rem] h-[59.2rem]"></div>
      <Footer />
    </div>
  );
};

export default AboutPage;
