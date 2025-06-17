import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full text-primary py-48 rounded-lg">
      <div className="mx-4 lg:mx-[120px]">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            Contact Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src="/images/Tranhumans.png"
                alt="Contact Illustration"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full border border-primary/20 rounded-lg flex flex-col justify-between min-h-[480px]">
              <div className="p-4 md:p-6 lg:py-24 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left uppercase">
                  Get in Touch
                </h2>
                <p className="text-zinc-500 mb-8 text-center lg:text-left">
                  Let's collaborate or just say hi. I'll try to respond as soon
                  as possible!
                </p>

                <form className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>

                  <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-6 bg-primary text-slate-800 font-bold text-lg px-8 py-4 uppercase transition-all duration-300 overflow-hidden relative rounded"
                    >
                      <span className="relative z-10 font-firacode">
                        Send Message
                      </span>
                      <CgArrowLongRight className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-2" />
                      <span className="absolute inset-0 bg-white opacity-70 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
