import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Expert Development",
    description: "Building with modern web technologies and best practices to create scalable, maintainable applications."
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solving",
    description: "Turning complex challenges into elegant solutions that delight users and solve real problems."
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "From idea to deployment in record time, leveraging Replit's powerful platform for fast iteration."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            About Me
          </h2>
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              As a Replit expert and passionate builder, I specialize in creating web applications that are both beautiful and functional. My approach combines technical expertise with a deep understanding of user needs.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether it's a full-stack application, an interactive prototype, or a scalable platform, I bring ideas to life with clean code, thoughtful design, and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-card p-8 rounded-lg hover-elevate active-elevate-2 transition-all" data-testid={`card-feature-${index}`}>
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
