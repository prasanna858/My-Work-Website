import { motion } from "framer-motion";
import { BookOpen, Image, Video, Package } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Menu Design",
    description: "Eye-catching menu cards that sell",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Image,
    title: "Thumbnails",
    description: "YouTube & social media thumbnails",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Video,
    title: "Reels & Shorts",
    description: "Scroll-stopping video content",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Package,
    title: "Brand Packages",
    description: "Complete visual identity kits",
    color: "bg-primary/10 text-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesRow() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            What I Create
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Specialized in food-focused visual content that drives engagement and sales
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 md:p-8 bg-card rounded-3xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-elevated cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                <service.icon size={26} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
