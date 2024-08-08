import { StaticImageData } from "next/image";
import expressImg from "@/public/images/web-design/desktop/image-express.jpg";
import transferImg from "@/public/images/web-design/desktop/image-transfer.jpg";
import photonImg from "@/public/images/web-design/desktop/image-photon.jpg";
import builderImg from "@/public/images/web-design/desktop/image-builder.jpg";
import blogrImg from "@/public/images/web-design/desktop/image-blogr.jpg";
import campImg from "@/public/images/web-design/desktop/image-camp.jpg";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export const webDesignProjects: ProjectCardProps[] = [
  {
    title: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
    image: expressImg,
  },

  {
    title: "Transfer",
    description:
      "Site for low-cost money transfers and sending money within seconds",
    image: transferImg,
  },

  {
    title: "Phonto",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: photonImg,
  },

  {
    title: "Builder",
    description:
      "Connects users with local contractors based on their location",
    image: builderImg,
  },

  {
    title: "Blogr",
    description:
      "Blogr is a platform for creating an online blog or publication",
    image: blogrImg,
  },

  {
    title: "Camp",
    description:
      "Get expert training in coding, data design, and digital marketing",
    image: campImg,
  },
];
