"use client";

import { MapComponent } from "../MapComponent";
import { LocationProps } from "@/app/data/locationData";

const LocationBlock = ({ ...props }: LocationProps) => {
  return (
    <section className="grid items-center md:gap-[3.1rem] text-center md:text-left lg:grid-cols-[auto_auto]">
      <div className={`lg:w-[35rem] ${props.order}`}>
        <MapComponent lat={props.lat} lng={props.lng} zoom={props.zoom} />
      </div>
      <div className="location-card-bg   py-[8rem] px-[2.4rem] flex flex-col items-center md:rounded-2xl md:px-[7.5rem] md:py-[8.8rem] md:flex-row md:flex-wrap">
        <h2 className="text-[--peach-dark] mb-[2.4rem] md:w-full">
          {props.heading}
        </h2>
        <div className=" body-text text-[--dark-grey] mb-[2.4rem] md:mb-0 md:mr-[11rem]">
          <p className="font-bold">{props.office}</p>
          <p>{props.streetAddress}</p>
          <p>{props.fullAddress}</p>
        </div>
        <div className="body-text text-[--dark-grey]">
          <p className="font-bold">Contact</p>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </section>
  );
};

export default LocationBlock;
