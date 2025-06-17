"use client";

import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import { motion } from "framer-motion";

export default function Hero2() {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center -mt-[120px]"
      style={{
        backgroundImage: `url('/images/bg.png')`,
      }}
    >
      <motion.div
        className="flex flex-col justify-center items-center gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        {/* Avatar */}
        <motion.div
          className="relative w-[180px] h-[180px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Image
            src="/images/avatar.png"
            alt="Hero Section"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Title & Role */}
        <motion.div
          className="text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-inter font-bold mb-6">
            TEGUH RAMADHAN
          </h1>

          <div className="flex flex-col sm:flex-row gap-2 md:gap-6 lg:gap-12 justify-center items-center">
            <button className="group w-auto px-6 py-0 md:py-3 lg:py-6 font-firacode text-primary uppercase flex items-center justify-center gap-2 transition duration-300 border-b-2 border-transparent hover:border-purple-400">
              UI UX Designer{" "}
              <CgArrowLongRight className="transform transition duration-300 group-hover:translate-x-2 group-hover:text-purple-400" />
            </button>
            <button className="group w-auto px-6 py-0 md:py-3 lg:py-6 font-firacode text-primary uppercase flex items-center justify-center gap-2 transition duration-300 border-b-2 border-transparent hover:border-emerald-400">
              Frontend Dev{" "}
              <CgArrowLongRight className="transform transition duration-300 group-hover:translate-x-2 group-hover:text-emerald-400" />
            </button>
          </div>

          {/* Hire Me Button */}
          <motion.div
            className="flex justify-center items-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <a
              href="#"
              className="group inline-flex items-center gap-8 bg-primary text-slate-800 font-bold text-lg px-8 py-4 uppercase transition-all duration-300 overflow-hidden relative"
            >
              <span className="relative z-10 font-firacode">Hire Me</span>
              <CgArrowLongRight className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-2" />
              <span className="absolute inset-0 bg-white opacity-70 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
