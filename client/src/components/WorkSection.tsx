import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { projects } from "@shared/projects";

export default function WorkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in building web applications on Replit
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group"
                data-testid={`card-project-${index}`}
              >
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative aspect-[4/3] rounded-md overflow-visible cursor-pointer"
                >
                  <div className="relative w-full h-full rounded-md overflow-hidden hover-elevate active-elevate-2 transition-all">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      initial={false}
                      animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-medium text-sm mb-1">{project.title}</h3>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="font-mono text-xs bg-white/20 text-white border-0 no-default-hover-elevate no-default-active-elevate">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
