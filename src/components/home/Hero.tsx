import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
export function Hero() {
  return <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl" animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} />
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for new projects
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Designs that make hungry customers{" "}
              <span className="text-accent">stop.</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Menu cards, thumbnails and short reels for food brands — crafted to sell and make mouths water.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/portfolio">
                  See Portfolio
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-secondary" size="lg" asChild className="group">
                <Link to="/contact">
                  <Play size={18} className="text-accent" />
                  Book a Free Call
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border">
              {[{
              value: "0",
              label: "Projects Delivered"
            }, {
              value: "0",
              label: "Happy Restaurants"
            }, {
              value: "*.*",
              label: "Client Rating"
            }].map((stat, index) => <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>)}
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} className="relative hidden lg:block">
            <div className="relative">
              {/* Main image placeholder - will be generated */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden shadow-elevated">
                <img src="/hero-menu-design.jpg" alt="Beautiful restaurant menu design showcasing food photography" className="w-full h-full object-cover" loading="eager" />
              </div>

              {/* Floating cards */}
              <motion.div className="absolute -bottom-6 -left-6 p-4 bg-card rounded-2xl shadow-elevated" animate={{
              y: [0, -8, 0]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🍕</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Menu Designs</p>
                    <p className="text-xs text-muted-foreground">0 templates</p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="absolute -top-4 -right-4 p-4 bg-card rounded-2xl shadow-elevated" animate={{
              y: [0, -6, 0]
            }} transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Reels & Videos</p>
                    <p className="text-xs text-muted-foreground">Scroll-stopping</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}