import { FeatureCardProps } from "@/app/data/featureCards";
import Image from "next/image";

const FeatureCard = ({ ...props }: FeatureCardProps) => {
  return (
    <article className="flex flex-col text-center max-w-[40rem] mx-auto md:flex-row md:items-center md:text-left md:max-w-[68.9rem] md:gap-[4.8rem] lg:flex-col lg:text-center ">
      <Image
        className={`rounded-[50%] overflow-visible mx-auto mb-[4.8rem] md:m-0 ${props.background}`}
        width={202}
        height={202}
        src={props.image.src}
        alt={props.alt}
      />
      <div>
        <h3 className="text-[2rem] tracking-[.5rem] uppercase leading-[2.6rem] font-medium text-[--dark-grey] mb-[3.2rem]">
          {props.heading}
        </h3>
        <p className="body-text text-[--dark-grey]">{props.description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
