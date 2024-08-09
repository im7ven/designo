import LocationCard from "./LocationCard";
import canadaIcon from "@/public/images/shared/desktop/illustration-canada.svg";
import australiaIcon from "@/public/images/shared/desktop/illustration-australia.svg";
import ukIcon from "@/public/images/shared/desktop/illustration-united-kingdom.svg";

const LocationGrid = () => {
  return (
    <div className="grid justify-center gap-[6rem] my-[12rem] lg:my-[16rem] lg:gap-[2rem] lg:grid-cols-3 ">
      <LocationCard
        location="Canada"
        locationImg={canadaIcon}
        backgroundImg="bg-friendly-gradient"
      />
      <LocationCard
        location="Australia"
        locationImg={australiaIcon}
        backgroundImg="bg-passionate-gradient"
      />
      <LocationCard
        location="United Kingdom"
        locationImg={ukIcon}
        backgroundImg="bg-resourceful-gradient"
      />
    </div>
  );
};

export default LocationGrid;
