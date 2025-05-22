import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* UI: Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Fondo negro y grid oscuro siempre */}
      <div
        className="h-screen w-full bg-black-100 bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Gradiente radial para el fondo */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-0">
          <p className="uppercase tracking-widest text-xs text-center text-white max-w-80">
            
          </p>
          {/* Logo super grande, sin margen inferior */}
          <img
            src="/Bold Modern Minimalist Gradient Technology Business Logo  (4).png"
            alt="Logo"
            className="w-full max-w-[1000px] object-contain m-0 p-0 mb-16"
          />
          <p className="text-center md:tracking-wider text-lg md:text-2xl lg:text-3xl text-white m-0 p-0 mb-8">
            Innovación que impulsa tu éxito.
          </p>
          {/* El texto anterior se elimina o puedes moverlo a otro lugar si lo deseas */}
          {/* <TextGenerateEffect
            words={
              "Innovación que impulsa tu éxito. Bright People."
            }
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-white"
          /> */}

          <a href="#about">
            <MagicButton
              title="Nuestro trabajo"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
