"use client";

import Aurora from "./utils/Aurora";
import Squares from "./utils/SquareBg";
import Particles from "./utils/Particles";
import ShinyText from "./utils/ShinnyText";

// icons
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-zinc-900 overflow-hidden transition-colors duration-500">
      <div className="w-full absolute top-0 left-0 z-10">
        <Particles
          particleColors={["#D75109", "#D75109"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-12 md:px-48 lg:px-72 text-center z-50">
        <h1 className="text-2xl md:text-6xl lg:text-6xl font-lora font-bold text-zinc-900 dark:text-white mb-8">
          Hi, I'm Teguh
        </h1>
        <p className="text-md md:text-xl lg:text-4xl font-nunito text-zinc-600 dark:text-zinc-300 mb-8">
          A passionate Frontend Developer & UI/UX Designer crafting elegant,
          clean, and responsive digital experiences.
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="min-w-[200px] w-fit inline-flex justify-center items-center gap-2 font-lora font-thin px-6 py-3 rounded border border-zinc-900 dark:border-zinc-100/10 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-600 transition"
          >
            View Projects
          </a>
          <a
            href="#projects"
            className="min-w-[200px] w-fit inline-flex justify-center items-center gap-2 font-lora font-thin px-6 py-3 rounded border border-orange-600 dark:border-orange-600 text-zinc-900 dark:text-orange-600 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-orange-600 transition"
          >
            Contact Me{" "}
            <FaLongArrowAltRight className="text-lg text-orange-600 hover:text-zinc-100" />
          </a>
        </div>
      </div>
    </section>
  );
}
