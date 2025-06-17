"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import CircularText from "./utils/CircularText";

const designIcons = [
  { src: "/images/icons/vscode_ic.png", alt: "VSCode" },
  { src: "/images/icons/figma_ic.png", alt: "FIgma" },
  { src: "/images/icons/ai_ic.png", alt: "Photoshop" },
  { src: "/images/icons/ps_ic.png", alt: "Illustrator" },
  { src: "/images/icons/blender_ic.png", alt: "Blender" },
];

const codeIcons = [
  { src: "/images/icons/html_ic.png", alt: "HTML" },
  { src: "/images/icons/css_ic.png", alt: "CSS" },
  { src: "/images/icons/tailwindcss_ic.png", alt: "TailwindCSS" },
  { src: "/images/icons/react_ic.png", alt: "React" },
  { src: "/images/icons/nextjs_ic.png", alt: "Next.js" },
  { src: "/images/icons/laravel_ic.png", alt: "Laravel" },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-20 px-4 lg:px-[120px] max-w-full mx-auto min-h-screen font-inter"
    >
      <div className="flex flex-col md:flex-row gap-8 min-h-[800px]">
        {/* KIRI: Card tinggi */}
        <motion.div
          className="bg-bgcard rounded-xl py-24 text-white flex flex-col justify-center w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="relative w-[220px] h-[220px] mx-auto mb-6">
            <Image
              src="/images/avatar.png"
              alt="Hero Section"
              fill
              priority
              className="object-cover rounded-full"
            />
          </div>
          <h3 className="text-4xl font-semibold text-primary text-center mb-2 uppercase">
            Teguh Ramadhan
          </h3>
          <h4 className="text-xl font-semibold text-primary text-center my-2">
            teguhthuv@gmail.com
          </h4>
          <div className="flex justify-center items-center gap-6 mt-6">
            {[
              { src: "/images/icons/dribbble_ic.png", alt: "Dribbble" },
              { src: "/images/icons/github_ic.png", alt: "GitHub" },
              { src: "/images/icons/ig_ic.png", alt: "Instagram" },
              { src: "/images/icons/linkedin_ic.png", alt: "LinkedIn" },
            ].map((icon, index) => (
              <div
                key={index}
                className="transition-transform duration-300 hover:scale-110 hover:brightness-125"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* KANAN: 2 card atas-bawah */}
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          {/* Atas */}
          <motion.div
            className="bg-bgcard rounded-xl p-8 text-white flex flex-col lg:px-[48px] lg:py-[56px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <h3 className="text-4xl font-semibold mb-3 text-primary uppercase">
              About Me
            </h3>
            <p className="inline-flex  items-center gap-4 text-emerald-400 my-4">
              <IoCheckmarkCircleSharp className="w-[24px] h-[24px] text-emerald-400" />
              Open to Work
            </p>
            <p className="text-xl text-start text-primary mt-6 leading-loose">
              I'm a <span className="font-bold">UI/UX Designer</span> and
              <span className="font-bold">Frontend Developer</span> with around
              2 years of experience in crafting digital interfaces.{" "}
              <span className="italic">
                I specialize in creating visually appealing designs
              </span>{" "}
              that are both user-friendly and intuitive, combining a clean
              aesthetic with thoughtful interaction patterns.
            </p>
          </motion.div>

          {/* Bawah */}
          <motion.div
            className="bg-bgcard rounded-xl text-white h-full flex flex-col justify-center px-[48px] py-[56px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {/* Judul 1 */}
            <h3 className="text-xl font-semibold mb-6 text-primary uppercase">
              My Creative Stack
            </h3>
            <div className="flex flex-wrap gap-12 mb-12">
              {designIcons.map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon.src}
                  alt={icon.alt}
                  width={32}
                  height={32}
                  className="w-auto h-[18px] md:h-[36px] lg:h-[36px] hover:scale-110 transition"
                />
              ))}
            </div>

            {/* Judul 2 */}
            <h3 className="text-xl font-semibold mb-6 text-primary uppercase">
              What I Code With
            </h3>
            <div className="flex flex-wrap gap-12">
              {codeIcons.map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon.src}
                  alt={icon.alt}
                  width={32}
                  height={32}
                  className="w-auto h-[18px] md:h-[36px] lg:h-[36px] hover:scale-110 transition"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
