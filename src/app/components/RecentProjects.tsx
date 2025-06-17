"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CgArrowLongRight } from "react-icons/cg";
import projectData from "@/app/data/projectsData";

export default function RecentProjects() {
  return (
    <section
      id="projects"
      className="w-full h-auto flex flex-col justify-center py-16"
    >
      <div className="w-full px-4 lg:px-[120px]">
        {/* Judul Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-primary text-center mb-12 uppercase"
        >
          Recent Projects
        </motion.h2>

        {/* Grid Project Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative w-full max-w-[450px] h-[400px] rounded-xl overflow-hidden shadow-lg bg-zinc-800"
            >
              {/* Gambar Project */}
              {project.images ? (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 bg-zinc-700 flex items-center justify-center text-white text-sm">
                  No image
                </div>
              )}

              {/* Badge Tipe */}
              <span
                className={`absolute top-4 left-4 z-30 px-3 py-1 text-sm font-semibold rounded-full ${
                  project.category === "design"
                    ? "bg-primary text-slate-800"
                    : "bg-green-600 text-white"
                }`}
              >
                {project.category}
              </span>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 z-50 flex items-center justify-center">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-white text-lg font-semibold uppercase font-inter underline underline-offset-4 hover:text-emerald-400 transition"
                >
                  <span className="relative z-10">View Projects</span>
                  <CgArrowLongRight className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-2" />
                </Link>
              </div>

              {/* Gradient & Deskripsi */}
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute bottom-0 p-6 z-30 text-white">
                <h3 className="text-2xl text-primary font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm opacity-80">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol See All */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: false }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-8 border border-primary text-primary hover:text-slate-800 font-bold text-lg px-8 py-4 uppercase transition-all duration-300 overflow-hidden relative"
          >
            <span className="relative z-10 font-firacode">
              See All Projects
            </span>
            <CgArrowLongRight className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-2" />
            <span className="absolute inset-0 bg-white opacity-70 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
