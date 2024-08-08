import DesignCard from "@/app/components/shared/DesignCard";
import DesignHero from "@/app/components/shared/DesignHero";
import ProjectGrid from "@/app/components/shared/ProjectGrid";
import { appDesignProjects } from "@/app/data/appDesignCards";
import { graphicDesign, webDesignSm } from "@/app/data/designCards";

const AppDesignPage = () => {
  return (
    <div className="max-w-[111rem] mx-auto">
      <DesignHero heading="App Design" backgroundImage="hero-app">
        Our mobile designs bring intuitive digital solutions to your customers
        right at their fingertips.
      </DesignHero>
      <ProjectGrid projects={appDesignProjects}></ProjectGrid>
      <div className="flex flex-col gap-[2.4rem] max-w-[68.9rem] mx-auto md:mb-[3.5rem] lg:mb-[5.9rem] lg:max-w-[111rem] px-[2.4rem] lg:flex-row lg:gap-[3rem]">
        <DesignCard {...webDesignSm} />
        <DesignCard {...graphicDesign} />
      </div>
    </div>
  );
};

export default AppDesignPage;
