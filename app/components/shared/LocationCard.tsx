import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  location: string;
  locationImg: StaticImageData;
  backgroundImg: string;
}

const LocationCard = ({ location, locationImg, backgroundImg }: Props) => {
  return (
    <article className="flex flex-col justify-center items-center">
      <Image
        className={`${backgroundImg} rounded-[50%] overflow-visible`}
        width={202}
        height={202}
        src={locationImg.src}
        alt="Location icon"
      />
      <h3 className="tracking-[.5rem] text-[2rem] uppercase font-medium text-[--dark-grey] mt-[4.8rem] mb-[3.2rem]">
        {location}
      </h3>
      <Link href="/location</article>" className="btn-secondary">
        See location
      </Link>
    </article>
  );
};

export default LocationCard;
