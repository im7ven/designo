export interface LocationProps {
  lat: number;
  lng: number;
  zoom?: number;
  heading: string;
  phone: string;
  streetAddress: string;
  fullAddress: string;
  office: string;
  email: string;
  order?: string;
}

export const locations: LocationProps[] = [
  {
    lat: 43.7039,
    lng: -79.242,
    zoom: 15,
    heading: "Canada",
    phone: "P : +1 253-863-8967",
    email: "M : contact@designo.co",
    streetAddress: "3886 Wellington Street",
    fullAddress: "Toronto, Ontario M9C 3J5",
    office: "Designo Central Office",
    order: "lg:order-2",
  },
  {
    lat: 43.7039,
    lng: -79.242,
    zoom: 15,
    heading: "Australia",
    phone: "P : (02) 6720 9092",
    email: "M : contact@designo.au",
    streetAddress: "19 Balonne Street",
    fullAddress: "New South Wales 2443",
    office: "Designo AU Office",
  },
  {
    lat: 43.7039,
    lng: -79.242,
    zoom: 15,
    heading: "United Kingdom",
    phone: "P : 078 3115 1400",
    email: "M : contact@designo.uk",
    streetAddress: "13  Colorado Way",
    fullAddress: "Rhyd-y-fro SA8 9GA",
    office: "Designo UK Office",
    order: "lg:order-2",
  },
];
