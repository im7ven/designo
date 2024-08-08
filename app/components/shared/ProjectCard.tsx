import { ProjectCardProps } from "@/app/data/webDesignCards";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ ...props }: ProjectCardProps) => {
  return (
    <Link href="/">
      <article className=" bg-[#FDF3F0] group hover:bg-[--peach-dark]  transition flex flex-col max-w-[32.7rem] rounded-3xl text-center overflow-hidden md:flex-row md:max-w-[68.9rem] lg:flex-col">
        <Image
          className="md:max-w-[33.9rem] lg:max-w-[35rem]"
          src={props.image}
          alt="Project preview"
        />
        <div className="px-[3rem] py-[3.2rem] transition  group-hover:text-white md:self-center">
          <h3 className="uppercase text-[2rem] tracking-[.5rem] leading-[2.6rem] text-[--peach-dark] mb-[1.6rem] group-hover:text-white">
            {props.title}
          </h3>
          <p className="body-text group-hover:text-white">
            {props.description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
