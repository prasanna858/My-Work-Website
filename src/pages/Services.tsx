import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactFAB } from "@/components/ui/MobileContactFAB";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Starter",
    description: "Perfect for small restaurants getting started",
    price: "₹15,000",
    period: "per project",
    popular: false,
    features: [
      "Single menu card design",
      "Up to 30 items",
      "2 revision rounds",
      "Print-ready PDF",
      "5 business day delivery",
    ],
  },
  {
    name: "Pro",
    description: "Most popular for growing food businesses",
    price: "₹35,000",
    period: "per project",
    popular: true,
    features: [
      "Complete menu set (4-6 pages)",
      "Unlimited items",
      "5 revision rounds",
      "Print + Digital formats",
      "Social media templates",
      "3 business day delivery",
      "1 month support",
    ],
  },
  {
    name: "Brand Kit",
    description: "Complete visual identity for your brand",
    price: "₹75,000",
    period: "per project",
    popular: false,
    features: [
      "Everything in Pro",
      "Logo design",
      "Brand guidelines",
      "10 social media templates",
      "YouTube thumbnail pack (10)",
      "5 short video reels",
      "Priority 2-day delivery",
      "3 months support",
    ],
  },
];

const Services = () => {
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
              Services & Pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Transparent pricing for exceptional design work. Pick a package or request a custom quote.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl border-2 transition-all hover:shadow-elevated ${
                  pkg.popular
                    ? "bg-gradient-to-br from-primary to-primary/90 border-primary shadow-elevated"
                    : "bg-card border-border hover:border-primary/30"
                }`}
                style={pkg.popular ? { color: '#FAF9F7' } : {}}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium flex items-center gap-1.5">
                    <Sparkles size={14} />
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-display font-bold ${pkg.popular ? "text-[#FAF9F7]" : ""}`}>{pkg.name}</h3>
                  <p className={`text-sm mt-1 ${pkg.popular ? "text-[#FAF9F7]/80" : "text-muted-foreground"}`}>
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={`text-4xl font-display font-bold ${pkg.popular ? "text-[#FAF9F7]" : ""}`}>{pkg.price}</span>
                  <span className={`text-sm ml-1 ${pkg.popular ? "text-[#FAF9F7]/70" : "text-muted-foreground"}`}>
                    {pkg.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={18} className={`mt-0.5 flex-shrink-0 ${pkg.popular ? "text-accent" : "text-primary"}`} />
                      <span className={`text-sm ${pkg.popular ? "text-[#FAF9F7]" : "text-foreground/80"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-2xl ${
                    pkg.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : ""
                  }`}
                  variant={pkg.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Custom Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="max-w-xl mx-auto p-8 rounded-3xl bg-muted/50 border border-border">
              <h3 className="text-xl font-display font-bold mb-2">
                Need something custom?
              </h3>
              <p className="text-muted-foreground mb-6">
                Have a unique project or specific requirements? Let's discuss your needs and create a tailored solution.
              </p>
              <Button variant="accent" size="lg" className="rounded-2xl" asChild>
                <Link to="/contact">
                  Request Custom Quote
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <MobileContactFAB />
    </div>
  );
};

export default Services;
