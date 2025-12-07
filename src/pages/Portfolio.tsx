import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactFAB } from "@/components/ui/MobileContactFAB";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Menu", "Thumbnails", "Reels", "Brand Kit"];

const projects = [
  {
    id: 1,
    title: "Spice Garden Menu",
    category: "Menu",
    image: "/project-1.jpg",
    description: "Complete menu redesign for Indian restaurant",
    images: [], // No extra images
  },

  {
    id: 2,
    title: "TasteBuds YouTube",
    category: "Thumbnails",
    image:
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765126737/WhatsApp_Image_2025-11-27_at_00.27.18_aa16d83f_kvvc0u.jpg",

    description: "30 custom thumbnails for food channel",

    // ⭐ This project has multiple images
    images: [
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765126737/WhatsApp_Image_2025-11-27_at_00.27.18_aa16d83f_kvvc0u.jpg",
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765126680/main-sample.png",
      "https://res.cloudinary.com/dbodkubbk/image/upload/v1765126679/cld-sample-5.jpg",
    ],
  },

  {
    id: 3,
    title: "Fresh Bites Reels",
    category: "Reels",
    image: "/project-3.jpg",
    description: "Instagram reels series for cafe",
    images: [],
  },

  {
    id: 4,
    title: "Curry House Branding",
    category: "Brand Kit",
    image: "/project-4.jpg",
    description: "Complete brand identity package",
    images: [],
  },

  {
    id: 5,
    title: "Veg Paradise Menu",
    category: "Menu",
    image: "/project-5.jpg",
    description: "Vegetarian restaurant menu cards",
    images: [],
  },

  {
    id: 6,
    title: "Foodie Vlogs Thumbnails",
    category: "Thumbnails",
    image: "/project-6.jpg",
    description: "YouTube thumbnail series",
    images: [],
  },

  {
    id: 7,
    title: "Cafe Mocha Reels",
    category: "Reels",
    image: "/project-7.jpg",
    description: "Coffee shop promotional reels",
    images: [],
  },

  {
    id: 8,
    title: "Biryani House Menu",
    category: "Menu",
    image: "/project-8.jpg",
    description: "Traditional biryani restaurant menu",
    images: [],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              My Portfolio
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A collection of menu designs, thumbnails, and visual content that
              drives results
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="floating-card"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="group block relative overflow-hidden rounded-3xl bg-muted aspect-[3/4]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-display font-semibold text-primary-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/80 mt-1">
                        {project.description}
                      </p>
                    </div>

                    {/* Corner icon */}
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-card/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink
                        size={16}
                        className="text-primary-foreground"
                      />
                    </div>

                    {/* Badge - visible by default */}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium group-hover:opacity-0 transition-opacity duration-300">
                      {project.category}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
      <MobileContactFAB />
    </div>
  );
};

export default Portfolio;
