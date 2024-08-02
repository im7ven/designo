import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import HomeHero from "./components/home/HomeHero";

export default function Home() {
  return (
    <main className="max-w-[111rem] mx-auto md:px-10">
      <HomeHero />
    </main>
  );
}
