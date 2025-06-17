"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CgArrowLongRight } from "react-icons/cg";
import projectData from "@/app/data/projectsData";
import Footer from "@/app/components/Footer";

export default function Projects() {
  const [sortBy, setSortBy] = useState("default");

  const sortedProjects = [...projectData].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <section className="min-h-screen w-full pt-16">
      <div className="px-6 lg:px-[120px]">
        {/* Judul Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-primary text-center mb-16 uppercase"
        >
          All Projects
        </motion.h1>

        {/* Breadcrumb & Sorting */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <nav className="text-sm text-zinc-400">
            <ul className="flex items-center gap-2 flex-wrap text-lg">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/projects"
                  className="text-emerald-400 font-semibold"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <label className="mr-2 text-sm text-zinc-400">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-zinc-800 border border-zinc-600 rounded px-3 py-1 text-white text-sm"
            >
              <option value="default">Default</option>
              <option value="title">Title (A-Z)</option>
              <option value="category">Category (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Grid Project */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg bg-zinc-800"
            >
              {/* Gambar */}
              {project.images ? (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-zinc-700 flex items-center justify-center text-white text-sm">
                  No image
                </div>
              )}

              {/* Badge */}
              <span
                className={`absolute top-4 left-4 z-20 px-3 py-1 text-sm font-semibold rounded-full ${
                  project.category === "design"
                    ? "bg-primary text-slate-800"
                    : "bg-green-600 text-white"
                }`}
              >
                {project.category}
              </span>

              {/* Overlay saat hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 z-30 flex flex-col justify-end items-start text-left px-6 sm:px-10 md:px-16 lg:px-24 pb-6 sm:pb-10 md:pb-12 lg:pb-16">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-primary mb-2 md:mb-3">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-xl text-zinc-200 mb-3 md:mb-4">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-white text-sm md:text-base font-semibold uppercase underline underline-offset-4 hover:text-emerald-400 transition"
                >
                  View Project
                  <CgArrowLongRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
