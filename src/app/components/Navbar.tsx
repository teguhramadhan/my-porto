"use client";

import { RiHomeFill } from "react-icons/ri";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      className="w-full flex justify-center items-center md:static fixed bottom-4 z-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
    >
      <motion.div
        id="navbar"
        className="w-[300px] h-[72px] border border-primary rounded-full md:mt-12 flex items-center justify-center backdrop-blur-lg bg-white/10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
      >
        <div className="flex items-center justify-center gap-12 w-4/5 text-primary">
          <Link href="/">
            <RiHomeFill className="w-[32px] h-[32px] hover:text-white hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
          </Link>
          <Link href="/projects">
            <AiFillCodeSandboxCircle className="w-[32px] h-[32px] hover:text-white hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
          </Link>
          <Link href="/about">
            <IoPersonCircle className="w-[32px] h-[32px] hover:text-white hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
          </Link>
          <Link href="/contact">
            <BiSolidMessageSquareDots className="w-[32px] h-[32px] hover:text-white hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
