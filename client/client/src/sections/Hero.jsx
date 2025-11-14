import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";
import Loader from "../components/Loader";

function Hero() {
  return (
    <section
      id="/"
      className="min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8 p-4 md:p-12 overflow-hidden"
    >
      <ParallaxBackground />

      <HeroText />

      <img
        src="assets/Astro.png"
        alt="Astronaut image"
        className="h-100 w-100  -z-40 md:-z-20 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[591px] xl:w-[500px] object-contain transition-all duration-300 hover:scale-105"
      />
    </section>
  );
}

export default Hero;
