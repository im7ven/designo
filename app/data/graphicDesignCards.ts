import { ProjectCardProps } from "./webDesignCards";
import timBrownImg from "@/public/images/graphic-design/desktop/image-change.jpg";
import waterImg from "@/public/images/graphic-design/desktop/image-boxed-water.jpg";
import scienceImg from "@/public/images/graphic-design/desktop/image-science.jpg";

export const graphicDesignProjects: ProjectCardProps[] = [
  {
    title: "Tim Brown",
    description: "A book cover designed fro Tim Brown's new release, 'Change'",
    image: timBrownImg,
  },
  {
    title: "Boxed Water",
    description: "A simple packaging concept made for Boxed Water",
    image: waterImg,
  },
  {
    title: "Science!",
    description: "A poster made in collaboration with the Federal Art Project",
    image: scienceImg,
  },
];
