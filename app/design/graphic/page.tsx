import DesignCard from "@/app/components/shared/DesignCard";
import DesignHero from "@/app/components/shared/DesignHero";
import ProjectGrid from "@/app/components/shared/ProjectGrid";
import { appDesign, webDesignSm } from "@/app/data/designCards";
import { graphicDesignProjects } from "@/app/data/graphicDesignCards";

const GraphicDesignPage = () => {
  return (
    <div className="max-w-[111rem] mx-auto">
      <DesignHero heading="Graphic Design" backgroundImage="">
        We deliver eye-catching branding materials that are tailored to meet
        your business objectives.
      </DesignHero>
      <ProjectGrid projects={graphicDesignProjects}></ProjectGrid>
      <div className="flex flex-col gap-[2.4rem] max-w-[68.9rem] mx-auto md:mb-[3.5rem] lg:mb-[5.9rem] lg:max-w-[111rem] px-[2.4rem] lg:flex-row lg:gap-[3rem]">
        <DesignCard {...appDesign} />
        <DesignCard {...webDesignSm} />
      </div>
    </div>
  );
};

export default GraphicDesignPage;
