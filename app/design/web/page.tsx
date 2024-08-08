import DesignCard from "@/app/components/shared/DesignCard";
import DesignHero from "@/app/components/shared/DesignHero";
import ProjectGrid from "@/app/components/shared/ProjectGrid";
import { appDesign, graphicDesign } from "@/app/data/designCards";
import { webDesignProjects } from "@/app/data/webDesignCards";
import React from "react";

const WebDesignPage = () => {
  return (
    <div className="max-w-[111rem] mx-auto">
      <DesignHero heading="Web Design" backgroundImage="hero-web">
        We build websites that serve as powerful marketing tools and bring
        memorable brand experiences.
      </DesignHero>
      <ProjectGrid projects={webDesignProjects} />
      <div className="flex flex-col gap-[2.4rem] max-w-[68.9rem] mx-auto md:mb-[3.5rem] lg:mb-[5.9rem] lg:max-w-[111rem] px-[2.4rem] lg:flex-row lg:gap-[3rem]">
        <DesignCard {...appDesign} />
        <DesignCard {...graphicDesign} />
      </div>
    </div>
  );
};

export default WebDesignPage;
