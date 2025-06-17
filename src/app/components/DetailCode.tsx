"use client";
import Link from "next/link";

export default function DetailCode({ project }: { project: any }) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="text-lg mb-6">{project.content.description}</p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Tech Stack:</h3>
        <ul className="list-disc pl-6">
          {project.content.techStack.map((tech: string, idx: number) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 mt-6">
        <Link
          href={project.content.github}
          target="_blank"
          className="px-4 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800"
        >
          View Code
        </Link>
        <Link
          href={project.content.demo}
          target="_blank"
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
}
