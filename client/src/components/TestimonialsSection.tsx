import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import testimonial1 from "@assets/generated_images/Female_executive_headshot_baaaf603.png";
import testimonial2 from "@assets/generated_images/Male_entrepreneur_headshot_c7dca364.png";
import testimonial3 from "@assets/generated_images/Female_startup_founder_headshot_ab211d81.png";
import testimonial4 from "@assets/generated_images/Male_tech_director_headshot_59773b38.png";

const testimonials = [
  {
    quote: "Solomon transformed our vision into a beautiful, functional platform in record time. His expertise with Replit and modern web technologies is exceptional. The result exceeded our expectations.",
    author: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
    image: testimonial1
  },
  {
    quote: "Working with Solomon was a game-changer for our startup. He built our MVP so quickly and efficiently that we were able to launch weeks ahead of schedule. Highly recommended!",
    author: "Marcus Chen",
    role: "Founder, StartupHub",
    image: testimonial2
  },
  {
    quote: "The quality of Solomon's work is outstanding. He doesn't just code—he thinks through the user experience and suggests improvements. Our users love the platform he built.",
    author: "Emily Rodriguez",
    role: "Product Lead, InnovateCo",
    image: testimonial3
  },
  {
    quote: "Solomon's ability to rapidly prototype and iterate is remarkable. He turned our complex requirements into an elegant solution that our team uses daily. A true professional.",
    author: "David Thompson",
    role: "CTO, Enterprise Solutions",
    image: testimonial4
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Trusted by founders, teams, and companies who value quality and speed
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-testimonial-${index}`}
              >
                <Card className="p-8 h-full hover-elevate active-elevate-2 transition-all">
                  <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                  
                  <p className="text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <div className="font-medium" data-testid={`text-author-${index}`}>
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
