import Link from "next/link";
import projectData from "@/app/data/projectsData";
import DetailDesign from "@/app/components/DetailDesign";
import DetailCode from "@/app/components/DetailCode";

import { HiArrowLongLeft } from "react-icons/hi2";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData.find(
    (p) => p.slug.toLowerCase().trim() === params.slug.toLowerCase().trim()
  );

  if (!project)
    return (
      <div className="min-h-screen flex justify-center items-center text-center text-red-500 font-semibold text-xl">
        Project not found.
      </div>
    );

  return (
    <div className="min-h-screen py-10s">
      <div className="flex justify-between items-center py-12 px-[120px]">
        <a
          href="/projects"
          className="group flex items-center text-white gap-4 cursor-pointer hover:text-primary transition"
        >
          <HiArrowLongLeft className="w-12 h-12 transform transition-transform duration-300 group-hover:-translate-x-2" />
          <span className="text-lg">Back to Home</span>
        </a>

        <div className="flex justify-center items-center">
          {/* Breadcrumb */}
          <nav className="text-sm text-zinc-400">
            <ul className="flex justify-center items-center gap-2 flex-wrap text-lg">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-primary transition"
                >
                  Projects
                </Link>
              </li>
              <li>/</li>
              <li className="text-emerald-400 font-semibold">
                {project.title}
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Render Detail Component */}
      {project.category === "design" ? (
        <DetailDesign project={project} />
      ) : (
        <DetailCode project={project} />
      )}
    </div>
  );
}
