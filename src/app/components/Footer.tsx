"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
};

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-darkbg backdrop-blur-lg text-primary mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        {/* Logo & Deskripsi */}
        <motion.div custom={0} variants={fadeInUp}>
          <h2 className="text-2xl font-bold mb-4">Teguh Ramadhan</h2>
          <p className="opacity-70 text-base">
            UI/UX Designer & Frontend Developer passionate about crafting
            beautiful, functional, and user-centered digital experiences.
          </p>
        </motion.div>

        {/* Navigasi */}
        <motion.div custom={1} variants={fadeInUp}>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-base">
            <li>
              <a href="#home" className="hover:text-white transition">
                Back to top
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Kontak */}
        <motion.div custom={2} variants={fadeInUp}>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-base">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-base" />
              <a
                href="mailto:teguh@email.com"
                className="hover:text-white transition"
              >
                teguhthuv@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-base" />
              <span>Bandung, Indonesia</span>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div custom={3} variants={fadeInUp}>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/teguh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/teguh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/teguh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="border-t border-primary/30 text-center py-6 text-sm opacity-70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Teguh Ramadhan. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
