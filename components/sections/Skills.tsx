"use client";

import { motion } from "framer-motion";

const skills = {
  frontend: ["HTML", "CSS", "React JS", "JavaScript", "TypeScript", "Material UI"],
  overall: ["Next JS", "Node JS", "Express JS", "Vite", "Git", "Tailwind"],
};

export default function Skills() {
  return (
    <section className="py-24 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expertise</h2>
        </motion.div>

        <div className="space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-medium mb-6 text-muted-foreground">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="text-2xl md:text-4xl font-bold text-foreground hover:text-muted-foreground transition-colors cursor-default"
                >
                  {skill}
                  <span className="text-muted-foreground opacity-30 mx-2">/</span>
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-medium mb-6 text-muted-foreground">Tech Stack</h3>
            <div className="flex flex-wrap gap-4">
              {skills.overall.map((skill) => (
                <span
                  key={skill}
                  className="text-2xl md:text-4xl font-bold text-foreground hover:text-muted-foreground transition-colors cursor-default"
                >
                  {skill}
                  <span className="text-muted-foreground opacity-30 mx-2">/</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
