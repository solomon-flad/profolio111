import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@shared/projects";

export default function ProjectDetail() {
  const [, params] = useRoute("/work/:id");
  const projectId = params?.id ? parseInt(params.id) : 0;
  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" data-testid="button-back">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-project-title">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-project-description">
              {project.description}
            </p>
          </div>

          <div className="rounded-lg overflow-hidden mb-8 border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
              data-testid="img-project-hero"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start" data-testid={`text-feature-${index}`}>
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs" data-testid={`badge-tech-${tech}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="font-mono text-xs" data-testid={`badge-tag-${tag}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <Button className="w-full" variant="default" asChild data-testid="button-live-demo">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </a>
                </Button>
                <Button className="w-full" variant="outline" asChild data-testid="button-source-code">
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              </section>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
