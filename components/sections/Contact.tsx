"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-0">
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
            Let&apos;s work <br /> together.
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-16">
            <div>
              <span className="block text-muted-foreground text-sm uppercase tracking-widest mb-2">Email</span>
              <a
                href="mailto:vivekrekhadia007@gmail.com"
                className="text-2xl font-medium hover:underline decoration-2 underline-offset-4"
              >
                vivekrekhadia007@gmail.com
              </a>
            </div>

            <div>
              <span className="block text-muted-foreground text-sm uppercase tracking-widest mb-2">Social</span>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/vivek-rekhadia-ab9a0717b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-medium hover:text-muted-foreground flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/vivekrekhadia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-medium hover:text-muted-foreground flex items-center gap-1"
                >
                  Github <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
