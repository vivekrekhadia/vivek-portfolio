"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Airbnb Clone",
    image: "/assets/project-1.png",
    github: "https://github.com/vivekrekhadia/airbnb",
    demo: "https://clone-bnb-lilac.vercel.app/",
    tags: ["Next.js", "Tailwind", "Prisma"],
  },
  {
    title: "IndexNinja",
    image: "/assets/project-2.png",
    github: null,
    demo: "https://www.indexninja.io/",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Twitter Clone",
    image: "/assets/project-3.png",
    github: "https://github.com/vivekrekhadia/Twitter-clone",
    demo: "https://twitter-clone-brown-sigma.vercel.app/",
    tags: ["Next.js", "Supabase", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <motion.div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Selected Works</h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              <div
                className={`relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-2xl bg-muted ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className={`${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <div className={`flex gap-3 mb-6 flex-wrap ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`flex gap-6 items-center ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-lg font-medium hover:text-muted-foreground transition-colors"
                    >
                      Visit Site <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Github
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
