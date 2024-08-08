import { ProjectCardProps } from "@/app/data/webDesignCards";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: ProjectCardProps[];
}

const ProjectGrid = ({ projects }: Props) => {
  return (
    <section className="grid gap-[4rem] justify-center px-[2.4rem] my-[9.6rem] md:my-[12rem] md:gap-[3.2rem] lg:my-[16rem] lg:grid-cols-3 lg:px-0 lg:gap-[3rem]">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default ProjectGrid;
