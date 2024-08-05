import { StaticImageData } from "next/image";
import friendlyFeature from "@/public/images/home/desktop/illustration-friendly.svg";
import passionFeature from "@/public/images/home/desktop/illustration-passionate.svg";
import resourcefulFeature from "@/public/images/home/desktop/illustration-resourceful.svg";

export interface FeatureCardProps {
  heading: string;
  image: StaticImageData;
  description: string;
  alt: string;
  background: string;
}

export const friendlyCard = {
  heading: "Friendly",
  image: friendlyFeature,
  description:
    "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  alt: "Friendly illustration",
  background: "bg-friendly-gradient",
};

export const passionateCard = {
  heading: "Passionate",
  image: passionFeature,
  description:
    "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  alt: "Passionate illustration",
  background: "bg-passionate-gradient",
};

export const resourcefulCard = {
  heading: "Resourceful",
  image: resourcefulFeature,
  description:
    "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfil our clients' needs.",
  alt: "Resourceful illustration",
  background: "bg-resourceful-gradient",
};
