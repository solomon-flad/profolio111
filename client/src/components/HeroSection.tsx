import { motion } from "framer-motion";
import profileImage from "@assets/WhatsApp Image 2025-11-15 at 3.35.34 PM_1763249797897.jpeg";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-800/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-700/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hey, I'm Solomon Oluwatosin — a Replit expert who loves building beautiful, useful things on the web.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I turn ideas into interactive, shareable, and scalable projects — one Repl at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl">
                <img
                  src={profileImage}
                  alt="Solomon Oluwatosin"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
