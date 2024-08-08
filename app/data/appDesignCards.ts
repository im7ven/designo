import { ProjectCardProps } from "./webDesignCards";
import airFilterImg from "@/public/images/app-design/desktop/image-airfilter.jpg";
import eyecamImg from "@/public/images/app-design/desktop/image-eyecam.jpg";
import faceItImg from "@/public/images/app-design/desktop/image-faceit.jpg";
import todoImg from "@/public/images/app-design/desktop/image-todo.jpg";
import loopStudiosImg from "@/public/images/app-design/desktop/image-loopstudios.jpg";

export const appDesignProjects: ProjectCardProps[] = [
  {
    title: "AirFilter",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    image: airFilterImg,
  },
  {
    title: "Eyecam",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    image: eyecamImg,
  },
  {
    title: "FaceIt",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
    image: faceItImg,
  },
  {
    title: "Todo",
    description: "A todo app that features cloud sync with light and dark mode",
    image: todoImg,
  },
  {
    title: "LoopStudios",
    description: "A VR experience app made for Loopstudios",
    image: loopStudiosImg,
  },
];
