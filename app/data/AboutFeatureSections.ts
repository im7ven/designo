import { StaticImageData } from "next/image";
import talentImgDesktop from "@/public/images/about/desktop/image-world-class-talent.jpg";
import talentImgTalent from "@/public/images/about/tablet/image-world-class-talent.jpg";
import talentImgMobile from "@/public/images/about/mobile/image-world-class-talent.jpg";

import realImgDesktop from "@/public/images/about/desktop/image-real-deal.jpg";
import realImgTablet from "@/public/images/about/tablet/image-real-deal.jpg";
import realImgMobile from "@/public/images/about/mobile/image-real-deal.jpg";

export interface AboutFeatureProps {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  desktopImg: StaticImageData;
  tabletImg: StaticImageData;
  mobile: StaticImageData;
  order?: string;
}

export const talentFeature: AboutFeatureProps = {
  heading: "World-class talent",
  paragraph1:
    "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
  paragraph2:
    "Our team is multi-disciplinary and we are not merely interested in form -- content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brands's stroy and mission.",
  desktopImg: talentImgDesktop,
  tabletImg: talentImgTalent,
  mobile: talentImgMobile,
};

export const realDealFeature: AboutFeatureProps = {
  heading: "The real deal",
  paragraph1:
    "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
  paragraph2:
    "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
  desktopImg: realImgDesktop,
  tabletImg: realImgTablet,
  mobile: realImgMobile,
  order: "lg:order-2",
};
