import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiReplit, SiGithub, SiLinkedin } from "react-icons/si";
import { Mail, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: SiReplit, label: "Replit", href: "#", testId: "link-replit" },
  { icon: SiGithub, label: "GitHub", href: "#", testId: "link-github" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#", testId: "link-linkedin" },
  { icon: Mail, label: "Email", href: "mailto:contact@example.com", testId: "link-email" }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwpapvgn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again later or contact me directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadPDF = () => {
    console.log("Download PDF triggered");
    toast({
      title: "Download started",
      description: "Your one-pager PDF is being prepared.",
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
            Let's Build Together
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Want to build something together? Let's make it fun.
          </p>

          <div className="bg-card p-8 rounded-lg mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                  className="text-base"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                  className="text-base"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  data-testid="input-message"
                  className="text-base resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="default" 
                className="w-full" 
                data-testid="button-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-4 flex-wrap justify-center">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  size="icon"
                  asChild
                  data-testid={link.testId}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <link.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>

            <Button
              variant="secondary"
              onClick={handleDownloadPDF}
              data-testid="button-download-pdf"
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Download One-Pager PDF
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
