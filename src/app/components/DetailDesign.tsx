"use client";
import Image from "next/image";
import Footer from "./Footer";

export default function DetailDesign({ project }: { project: any }) {
  return (
    <div className="w-full text-primary">
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-12">
          {project.title}
        </h1>
        <p className="text-base md:text-lg text-zinc-400 max-w-3xl mb-10">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col">
        {project.images && project.images.length > 0 ? (
          project.images.map((img: string, index: number) => (
            <div key={index} className="w-full overflow-hidden shadow-md">
              <Image
                src={img}
                alt={`${project.title} - ${index + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority={index === 0}
              />
            </div>
          ))
        ) : (
          <div className="w-full h-[200px] bg-zinc-800 text-center flex items-center justify-center text-zinc-200 text-xl font-semibold font-firacode rounded-xl">
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
