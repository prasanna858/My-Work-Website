import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: 1,
    title: "Spice Garden Menu",
    category: "Menu Design",
    image: "/project-1.jpg",
    stats: { increase: "*", metric: "order value increase" },
    color: "from-primary/80 to-primary",
  },
  {
    id: 2,
    title: "TasteBuds YouTube",
    category: "Thumbnails",
    image: "/project-2.jpg",
    stats: { increase: "*", metric: "views in 30 days" },
    color: "from-accent/80 to-accent",
  },
  {
    id: 3,
    title: "Fresh Bites Reels",
    category: "Social Reels",
    image: "/project-3.jpg",
    stats: { increase: "*", metric: "engagement rate" },
    color: "from-primary/80 to-accent/80",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Featured Work
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              Selected projects that showcase the impact of great design
            </p>
          </div>
          <Button variant="outline" asChild className="self-start md:self-auto">
            <Link to="/portfolio">
              View All Work
              <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/portfolio/${project.id}`}
                className="group block relative overflow-hidden rounded-3xl bg-muted aspect-[4/5]"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}
                />

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="text-sm font-medium text-primary-foreground/80 mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-primary-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {project.stats.increase}
                    </span>
                    <span className="text-sm text-primary-foreground/80">
                      {project.stats.metric}
                    </span>
                  </div>
                </div>

                {/* Corner icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-card/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={18} className="text-primary-foreground" />
                </div>

                {/* Bottom badge - always visible */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-sm font-medium group-hover:opacity-0 transition-opacity duration-300">
                  {project.category}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
