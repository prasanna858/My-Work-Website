import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactFAB } from "@/components/ui/MobileContactFAB";
import { Button } from "@/components/ui/button";
import { FileText, Palette, Send, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Brief",
    description: "Share your vision, brand guidelines, and goals. I'll ask questions to understand your business and target audience.",
    details: ["Fill out the project brief form", "Share your existing branding (if any)", "Discuss timeline and budget", "Define success metrics"],
    color: "bg-primary/10 text-primary",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description: "I create initial concepts and refine them based on your feedback until the design perfectly represents your brand.",
    details: ["Receive 2-3 initial concepts", "Provide feedback and revisions", "Fine-tune colors, fonts, and layout", "Approve final design"],
    color: "bg-accent/10 text-accent",
  },
  {
    number: "03",
    icon: Send,
    title: "Delivery",
    description: "Get your final files in all formats you need, plus ongoing support to ensure everything looks perfect.",
    details: ["Print-ready PDF files", "Digital formats for social media", "Source files (upon request)", "30-day post-delivery support"],
    color: "bg-secondary text-secondary-foreground",
  },
];

const Process = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              How I Work
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A simple, collaborative process designed to deliver results you'll love
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-12 top-32 bottom-0 w-0.5 bg-gradient-to-b from-border to-transparent h-24 hidden md:block" />
                )}

                <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-16">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center relative`}
                    >
                      <step.icon size={36} />
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center text-xs font-bold">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to start your project?
            </p>
            <Button variant="accent" size="lg" className="rounded-2xl" asChild>
              <Link to="/contact">
                Let's Talk
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
      <MobileContactFAB />
    </div>
  );
};

export default Process;
