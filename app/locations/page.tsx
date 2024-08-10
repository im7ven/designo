import LocationBlock from "../components/location/LocationBlock";
import { MapComponent } from "../components/MapComponent";
import Footer from "../components/shared/Footer";
import { locations } from "../data/locationData";

const LocationPage = () => {
  return (
    <>
      <main className="max-w-[111rem] mx-auto md:px-[2.4rem] xl:px-0">
        <div className="grid gap-[4rem] md:mb-[3.5rem] lg:mb-[5.6rem]">
          {locations.map((location, index) => (
            <LocationBlock key={index} {...location} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LocationPage;
