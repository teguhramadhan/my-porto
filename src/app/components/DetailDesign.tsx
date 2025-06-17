"use client";
import Image from "next/image";
import Footer from "./Footer";

export default function DetailDesign({ project }: { project: any }) {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 text-primary">
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 mt-12">
          {project.title}
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-3xl mb-10">
          {project.description}
        </p>
      </div>

      <div className="w-full overflow-hidden rounded-xl shadow-lg">
        {project.images ? (
          <Image
            src={project.images[0]}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        ) : (
          <div className="w-full h-[200px] md:h-[300px] bg-zinc-800 text-center flex items-center justify-center text-zinc-200 text-xl md:text-2xl font-semibold font-firacode rounded-xl">
            No image available
          </div>
        )}
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
