"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useMemo } from "react";

const containerStyle = {
  width: "100%",
  height: "32.6rem",
};

type MapComponentProps = {
  lat: number;
  lng: number;
  zoom?: number;
};

const MapComponent = ({ lat, lng, zoom }: MapComponentProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const center = useMemo(
    () => ({
      lat,
      lng,
    }),
    [lat, lng]
  );

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="md:rounded-2xl overflow-hidden">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export { MapComponent };
