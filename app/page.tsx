"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/app/components/button";
import { useEffect, useRef } from "react";

export default function Home() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        gridRef.current.style.setProperty("--mouse-x", `${x}%`);
        gridRef.current.style.setProperty("--mouse-y", `${y}%`);
        gridRef.current.classList.add("active");
      }
    };

    const handleMouseLeave = () => {
      if (gridRef.current) {
        gridRef.current.classList.remove("active");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="grid-overlay" ref={gridRef}>
        <div className="grid-pattern"></div>
      </div>

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl mb-8 leading-tight">
            Hello, I&apos;m <br />
            <span className="font-bold">Nathan 👋</span>
          </h1>
          <div className="flex flex-row gap-4 justify-center mt-8">
            <Button
              href="https://github.com/quiteboringv2"
              className="border-2 border-zinc-900 text-gray-300 bg-[#0E0E10] hover:bg-zinc-900 hover:text-white"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </Button>
            <Button
              href="https://discord.gg/GAhS8UfDyy"
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