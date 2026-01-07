"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 md:px-0" id="home">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">Hello, I&apos;m Vivek Rekhadia</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Frontend <br /> Developer<span className="text-muted-foreground">.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-md mb-8 leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences.
          </p>

          <div className="flex gap-6 items-center">
            <button
              onClick={() => (window.location.href = "#projects")}
              className="group flex items-center gap-2 text-lg font-medium hover:text-muted-foreground transition-colors"
            >
              See my work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.open("/assets/vivek_resume.pdf")}
              className="text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </button>
          </div>
        </motion.div>

        {/* Right Image (Minimal) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image src="/assets/profile-pic.png" alt="Vivek Rekhadia" fill className="object-cover" priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
