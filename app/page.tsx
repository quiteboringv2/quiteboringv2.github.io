"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/app/components/button";

export default function Home() {
  return (
    <div className="min-h-screen relative z-10">
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl mb-8 leading-tight">
            Hello, I&apos;m <br />
            <span className="font-bold">Nathan 👋</span>
          </h1>
          <div className="flex flex-row gap-4 justify-center mt-8">
            <Button
              href="https://github.com/quiteboringv2"
              className="border-2 border-slate-800 text-gray-300 hover:bg-slate-800 hover:text-white"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </Button>
            <Button
              href="https://cobalt.quiteboring.dev"
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Cobalt
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}