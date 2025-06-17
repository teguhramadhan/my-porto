import Link from "next/link";
import projectData from "@/app/data/projectsData";
import DetailDesign from "@/app/components/DetailDesign";
import DetailCode from "@/app/components/DetailCode";
import { HiArrowLongLeft } from "react-icons/hi2";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projectData.find(
    (p) => p.slug.toLowerCase().trim() === slug.toLowerCase().trim()
  );

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center text-center text-red-500 font-semibold text-2xl">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-6 px-4">
        <Link
          href="/projects"
          className="group flex items-center text-white gap-3 hover:text-primary transition"
        >
          <HiArrowLongLeft className="w-6 h-6 md:w-10 md:h-10 transform transition-transform duration-300 group-hover:-translate-x-2" />
          <span className="text-base md:text-lg">Back to Home</span>
        </Link>

        <nav className="text-sm text-zinc-400">
          <ul className="flex flex-wrap gap-2 text-sm md:text-lg">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/projects" className="hover:text-primary transition">
                Projects
              </Link>
            </li>
            <li>/</li>
            <li className="text-emerald-400 font-semibold">{project.title}</li>
          </ul>
        </nav>
      </div>

      {project.category === "design" ? (
        <DetailDesign project={project} />
      ) : (
        <DetailCode project={project} />
      )}
    </div>
  );
}
