"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Seasoned front-end developer with expertise in crafting engaging and intuitive user interfaces. Proven track
            record of transforming design concepts into visually appealing websites.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl glass"
          >
            <h3 className="text-lg font-semibold mb-8 text-foreground uppercase tracking-widest border-b border-border pb-2 inline-block">
              Experience
            </h3>
            <div className="space-y-8">
              <div className="group">
                <span className="text-sm text-muted-foreground block mb-1">4+ years</span>
                <h4 className="text-xl font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                  Frontend Development
                </h4>
                <p className="text-muted-foreground mt-2 text-sm">
                  Specializing in React, Next.js, and modern CSS frameworks.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl glass"
          >
            <h3 className="text-lg font-semibold mb-8 text-foreground uppercase tracking-widest border-b border-border pb-2 inline-block">
              Education
            </h3>
            <div className="space-y-8">
              <div className="group">
                <span className="text-sm text-muted-foreground block mb-1">Graduated</span>
                <h4 className="text-xl font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                  Computer Engineering (B.Tech)
                </h4>
                <p className="text-muted-foreground mt-2 text-sm">Bachelor degree.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
