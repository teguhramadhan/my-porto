"use client";
import Image from "next/image";
import Footer from "./Footer";

export default function DetailDesign({ project }: { project: any }) {
  return (
    <div className="max-w-full mx-auto text-primary">
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-6xl font-bold mb-6 mt-12">{project.title}</h1>
        <p className="text-xl text-zinc-400 mb-10">{project.description}</p>
      </div>

      <div className="w-full overflow-hidden">
        {project.images ? (
          <Image
            src={project.images[0]}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        ) : (
          <div className="w-full h-[300px] bg-zinc-800 text-center flex items-center justify-center text-zinc-200 text-2xl font-semibold font-firacode">
            No image available
          </div>
        )}
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
