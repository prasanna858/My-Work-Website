import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactFAB } from "@/components/ui/MobileContactFAB";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const packages = [
  {
    name: "YouTube Thumbnails",
    description: "Perfect for creators ready to grow their channel",
    price: "₹899",
    originalPrice: "₹1,299",
    period: "5 Thumbnails",
    popular: false,
    features: [
      "Up to 5 custom thumbnails",
      "High CTR focused designs",
      "2 revision rounds",
      "YouTube-ready dimensions",
      "Bonus: 1 menu card design (20+ Items Only)",
      "1 - business day delivery",
    ],
  },
  {
    name: "Menu Card Design",
    description: "Most popular for growing food businesses",
    price: "₹1,499",
    originalPrice: "₹1,999",
    period: "per project",
    popular: true,
    features: [
      "Complete menu set (4–6 pages)",
      "Unlimited food items",
      "2 revision rounds",
      "Print + Digital formats",
      "Social media menu templates",
      "2 - business day delivery",
      "1 month post-delivery support",
    ],
  },
  {
    name: "Brand Kit",
    description: "Complete visual identity for serious brands",
    price: "₹3,999",
    originalPrice: "₹5,999",
    period: "per project",
    popular: false,
    features: [
      "Logo design (primary + variations)",
      "Brand color palette & typography",
      "Brand usage guidelines (PDF)",
      "5 social media post templates",
      "YouTube thumbnail pack (5)",
      "5 short promotional video reels",
      "5 - business day delivery",
      "1 month priority support",
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
              Transparent pricing for exceptional design work.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => {
              const saveAmount =
                pkg.originalPrice &&
                Number(pkg.originalPrice.replace(/[₹,]/g, "")) -
                  Number(pkg.price.replace(/[₹,]/g, ""));

              return (
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
                  style={pkg.popular ? { color: "#FAF9F7" } : {}}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium flex items-center gap-1.5">
                      <Sparkles size={14} />
                      Most Popular
                    </div>
                  )}

                  {/* Save badge */}
                  {saveAmount && (
                    <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-accent text-accent-foreground">
                      Save ₹{saveAmount}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-display font-bold">
                      {pkg.name}
                    </h3>
                    <p className="text-sm mt-1 opacity-80">{pkg.description}</p>
                  </div>

                  {/* PRICE BLOCK */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6"
                  >
                    {/* Original price */}
                    <div className="text-sm line-through opacity-70">
                      {pkg.originalPrice}
                    </div>

                    <div className="flex flex-wrap items-end gap-2">
                      <span className="text-4xl font-display font-bold">
                        {pkg.price}
                      </span>
                      <span className="text-sm opacity-70">{pkg.period}</span>
                    </div>

                    <p className="text-xs mt-1 text-accent font-medium">
                      Limited-time launch offer 😈
                    </p>
                  </motion.div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check size={18} className="text-accent mt-0.5" />
                        <span className="text-sm opacity-90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full rounded-2xl"
                    variant={pkg.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link to="/contact">
                      Get Started <ArrowRight size={16} />
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
      <MobileContactFAB />
    </div>
  );
};

export default Services;
